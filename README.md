# SoleChart — Save Your Sole podiatry EHR concept

**Synthetic-data, nonproduction prototype. Do not enter or import real patient information.**

SoleChart is an exploratory, unofficial software concept tailored to the documented public services of **Save Your Sole Foot and Ankle Specialists**, Fort Collins, Colorado. The practice has **not** been represented as a client, sponsor, design partner, or approving organization.

## Start locally

Install [Bun](https://bun.sh), then:

```sh
bun install
bun run dev
```

Visit http://localhost:3000. The dev server binds to `127.0.0.1` by default. Use `bun test` to run core tests.

## Prototype screens

- Overview with today's appointments, check-in counts, and unsigned-draft counts
- Schedule with status changes and new appointment creation
- Searchable patient registry and editable chart summaries
- Podiatry encounter drafts with laterality, pain score, SOAP sections, and **simulated** signature
- Digital intake demonstrating a replacement for PDF-based new-patient paperwork
- Patient portal preview for appointment and chart access concepts

Everything is stored locally in the browser's `localStorage`. Use **Reset demo data** on the Schedule page to restore fictional sample patients. The data and names are invented. The doctor names and business details shown in the prototype are based on publicly listed practice information, not a verified partnership.

## Not included / safety exclusions

There is **no** real authentication, MFA, patient identity proofing, tenant isolation, encryption at rest, database, production audit log, prescription workflow, medical-device interface, lab interface, claims processing, electronic signature, FHIR API, patient notification, legal consent process, HIPAA program, or ONC certification. The appointment state and chart information are purely demo data. **Do not deploy publicly or use for patient care.**

## Planned next milestone

After clinicians validate workflows, implement a properly threat-modeled Bun/TypeScript backend with PostgreSQL, BAA-covered hosting, RBAC, tenant isolation, immutable audit events, clinical data validation, and a dedicated PHI security review before any real patient records are processed.

## Reference

Practice information: https://www.saveyoursole.net/ and https://www.saveyoursole.net/patient-paperwork/.