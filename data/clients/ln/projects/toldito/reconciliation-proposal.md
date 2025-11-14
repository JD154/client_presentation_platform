---
title: 'Propuesta — Módulo de Conciliación (Toldito · LR)'
description: 'Plan irresistible para consolidar y conciliar el libro financiero de LR con trazabilidad total, sobre la arquitectura ya desplegada.'
---

# Toldito · LR — Propuesta del Módulo de Conciliación

> Nota: Esta propuesta parte de lo ya construido y en producción (Hasura + PostgreSQL, Redis/BullMQ, NestJS monorepo con `subgraph`/`harvester`/`scheduler`, n8n, MinIO, Auth0, Caddy) y lo eleva con un módulo de conciliación auditable que genera valor inmediato.

## Resumen Ejecutivo

Tu operación ya ingiere, deduplica y valida transacciones desde múltiples fuentes. El siguiente paso natural es transformar ese flujo en un Libro de Órdenes conciliado que empareje entradas/salidas, consolide saldos multimoneda, exponga discrepancias y deje evidencia auditada (quién, cuándo, por qué). Lo hacemos sin rehacer nada: aprovechamos al 100% tu stack actual y agregamos un motor de reglas, sesiones de conciliación y una UI enfocada en velocidad y confianza.

## Resultados de Negocio (V1 Reconciliación)

- Tiempo a conciliación: ≥90% de movimientos conciliados dentro de la ventana operativa (≤15 min) con asistencia.
- Cobertura: ≥85% de matches automáticos en métodos estándar (Zelle, transferencias, Binance Pay/USDT, wallets) con tolerancias configurables.
- Trazabilidad: 100% de acciones con evidencia y `source_node_id` (inner‑memory graph), apto para auditoría.
- UX operativa: ≤2s P95 de TTI en vistas de conciliación y acciones masivas con teclado/atajos.

## Alcance (Must / Should / Could)

### Must (V1 estricto)

1. Motor de conciliación con reglas por servicio/método: monto exacto/tolerancia, ventana temporal, contraparte y firma desde `metadata/attachments`.
2. Normalización multimoneda (divisa base) con proveedor de tipos de cambio configurable.
3. Estructuras nuevas: `reconcile_session`, `reconcile_match`, enriquecimiento de `validators` en `ledger`.
4. UI de conciliación: selección por período/servicio, sugerencias, confirmación/edición, evidencias y notas.
5. KPIs operativos: tasa de conciliación, aging de pendientes, diferencias por servicio/moneda.
6. Seguridad y RLS en Hasura para sesiones y matches; auditoría de acciones.

### Should (paralelizables / siguientes)

- Heurísticas semánticas con adjuntos/`metadata` (firma de correo, asunto, contrapartes).
- Sesiones guardadas y reanudables; plantillas de reglas por servicio.
- Dashboard ampliado (Metabase) por períodos/centros de costo.

### Could (experimentos)

- Auto‑match continuo por colas (near‑real time) más allá de ventanas planificadas.
- Ajustes contables automáticos con aprobación humana.
- Integración de "precio de referencia" cripto (si aplica a tus flujos) para detectar spreads.

### No‑Goals (por ahora)

- Contabilidad de asientos dobles completa; reportes fiscales avanzados.

## Arquitectura (acoplada a tu stack)

- Dominio: `ledger`, `account`, `service`, `currency`, `attachment` (existentes) + `reconcile_session`, `reconcile_match` (nuevos).
- Servicios:
  - Jobs BullMQ: `recon:plan` (selección/estrategia), `recon:match` (candidatos y scoring), `recon:apply` (persistencia y estados).
  - Tipos de cambio: proveedor inyectable (fuente interna o externo). Cache en Redis.
  - Acciones Hasura/Events: disparo de conciliaciones por período/servicio.
- UI (Next.js): módulo "Conciliación" con vistas de sesión, sugerencias, evidencias, acciones masivas y notas.
- Observabilidad: métricas por job y por sesión; panel operativo (Metabase) con KPIs.

```
Operación (ingesta actual) → ledger (Hasura)
                                 │
             Disparo (UI/cron/Action) → recon:plan → recon:match → recon:apply
                                 │                               │
                           reconcile_session                ledger.state/validators
                                 │                               │
                              UI Conciliación  ← KPIs →  Metabase/Hasura
```

## Entregables y Criterios de Aceptación

- Esquema: migraciones Hasura para `reconcile_session` y `reconcile_match`, vistas y policies RLS.
- Backend: jobs `recon:*`, servicio de reglas por servicio/método, integración de FX y validadores.
- UI: módulo con sesiones, sugerencias, confirmación/edición, evidencias y notas.
- KPIs: tasa de conciliación, aging de pendientes, top discrepancias por servicio/moneda.
- Documentación: guías de operación, playbooks de casos comunes y FAQ de discrepancias.

## Calidad y QA (End-to-End + Regresión)

- Alcance de QA: cubre tanto los nuevos features de conciliación como los flujos ya existentes para asegurar no-regresión (ingesta por correos, deduplicación, validación, GraphQL/Hasura con RLS, módulos Transacciones/Integraciones, Auth0/JWT, adjuntos/MinIO).
- Estrategia de pruebas:
  - Unit tests: reglas de conciliación, normalización FX, serializadores.
  - Integración: operaciones GraphQL (queries/mutaciones), RLS por rol, colas BullMQ (jobs `recon:*`).
  - End-to-End: UI de conciliación (sesiones → sugerencias → confirmación), estados en `ledger`, KPIs.
  - Rendimiento: P50/P95 de vistas (objetivo P95 ≤2s) y latencias de jobs; pruebas con volúmenes representativos.
  - Seguridad y datos: JWT/RLS, masking de PII en logs, idempotencia y unicidad `(tx, account_id)`.
- Entornos y datos: conjunto de fixtures sintéticos + datasets anonimizados; mocks para proveedor FX y simulación de Gmail/Outlook cuando aplique.
- Puertas de calidad por sprint: DoR/DoD definidos por QA, smoke suite en staging, criterios de aceptación verificables y gate de regresión antes de demos.

Aceptación (clave):

- ≥85% de matches automáticos en métodos estándar (configurable por tolerancias).
- ≥90% de movimientos conciliados en ≤15 min (ventana operativa definida con negocio).
- 100% de acciones con trazabilidad (`source_node_id`) y enriquecimiento en `validators`.
- UI con P95 ≤2s en vistas y acciones de conciliación para N registros acordados en pruebas.

## Plan de Implementación por Fases

### Fase 1 — Núcleo (2–3 semanas)

- Migraciones Hasura, policies RLS, fragmentos GraphQL.
- Motor exacto/tolerancias + normalización FX.
- UI básica de sesiones y confirmación simple.
- KPIs esenciales (cobertura, aging, diferencias). Demo funcional.
- QA: Plan maestro de pruebas, baseline de regresión (ingesta/validación/UI básicas), smoke tests en staging; mocks de FX.
- UI/UX: incorporación de mockups de LR para layout de sesiones/sugerencias; primer prototipo navegable y feedback.

### Fase 2 — Heurística y Evidencias (2 semanas)

- Matching semántico por `metadata`/adjuntos.
- Evidencias y notas operativas; acciones masivas.
- Auditoría avanzada en `validators` y timeline.
- QA: E2E de conciliación con heurística, performance (P50/P95), seguridad (RLS) y pruebas de datos edge; corrección de hallazgos.
- UI/UX: ajuste fino respecto a mockups; componentes/evidencias, accesibilidad base (contraste, foco, teclado).

### Fase 3 — Optimización y Analítica (2 semanas)

- Metabase: dashboards ampliados y filtros.
- Auto‑sugerencias por servicio; plantillas de reglas.
- Tuning de colas y SLAs; hardening.
- QA: regresión completa de módulos existentes + conciliación; validación de KPIs/dashboards y monitoreo; hardening final.
- UI/UX: paridad visual con mockups (objetivo ≥95%), pulido de microinteracciones y estados vacíos/errores.

## Estimación y Equipo (orientativa)

- Esfuerzo V1 (Fase 1 + 2): 5–7 semanas calendario con un squad base (BE, FE, DevOps, QA), trabajando en paralelo.
- Composición: 1 Backend (NestJS/Hasura), 1 Frontend (Next.js/URQL), 0.5 DevOps, 0.5 QA.
- Cadencia: demo quincenal, KPIs semanales, playbooks continuos.

> QA dedicado lidera DoR/DoD, define y ejecuta baseline de regresión por sprint y gatea releases. Diseño/UI aplica los mockups de LR como fuente de verdad, con revisiones por hito.

> Nota: Fechas y puntos son indicativos; confirmamos tras una short discovery de 1–2 días con datos reales (volúmenes, monedas, servicios activos).

## Riesgos y Mitigaciones

| Riesgo                             | Mitigación                                                                                        |
| ---------------------------------- | ------------------------------------------------------------------------------------------------- |
| Variabilidad en formatos/servicios | Reglas por servicio/método, tolerancias por moneda, firma semántica desde `attachments/metadata`. |
| Tipos de cambio/latencia           | Cache en Redis, proveedor canjeable, degradación a valores de cierre si la fuente falla.          |
| Carga operativa en picos           | Jobs idempotentes, lotes por período/servicio, acciones masivas en UI, límites por sesión.        |
| Privacidad/auditoría               | RLS estricta, `source_node_id`, enriquecimiento de `validators`, masking de PII en logs.          |

## UI/UX y Mockups del Cliente

- Los mockups de LR se usarán como fuente de verdad para layout, navegación, jerarquía visual y componentes.
- Entregables de diseño: mapeo de componentes a biblioteca existente, tokens de diseño (tipografía, colores, espaciado), variantes de estado y responsive.
- Proceso: prototipos navegables por fase, revisiones con stakeholders y correcciones rápidas; objetivo de paridad visual ≥95% con los mockups finales.

## Modelo de Colaboración

- Propiedad: LR posee modelos de dominio y la UI final; UKLOK aporta patrones de infraestructura/orquestación y acelera entregables.
- Ritmo: demos quincenales, tablero de KPIs, backlog vivo; soporte operativo post‑entrega según acuerdo.
- Entregables por sprint: build en staging, demo navegable, breve nota técnica y plan de rollback.

## Cómo se integra con lo que ya tienes

- Reutilizamos `ledger`, `account`, `service`, colas BullMQ y Hasura.
- Añadimos únicamente el módulo de conciliación (tablas, jobs, UI), sin romper contratos existentes.
- Activamos KPIs y auditoría con las mismas herramientas ya desplegadas.

## Próximos Pasos

1. Short discovery (1–2 días) con datos reales: volúmenes por servicio/moneda, ventanas operativas, tolerancias.
2. Aprobación de V1 (Fase 1–2) y arranque inmediato.
3. Primera demo en ~2–3 semanas con conciliación exacta/tolerancias + KPIs esenciales.
