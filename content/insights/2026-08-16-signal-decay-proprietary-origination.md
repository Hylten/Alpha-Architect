---
title: "Signal Decay in Proprietary Origination: Why Process Beats Access"
slug: "2026-08-16-signal-decay-proprietary-origination"
description: "Alpha decay research shows informational advantages halve in three to six months. The real edge in PE origination lies in speed and depth of process, not exclusive access. Three layers that compound over time."
date: "2026-08-16"
tags: ["Signal Decay", "Proprietary Origination", "Deal Sourcing", "Information Advantage", "GTM Engineering"]
categories: ["Intelligence"]
canonical_url: "https://hylten.github.io/Alpha-Architect/intelligence/2026-08-16-signal-decay-proprietary-origination/"
meta_title: "Signal Decay in Proprietary Origination: Process Beats Access"
meta_description: "Alpha decay research shows informational advantages halve in three to six months. Build origination infrastructure with targeting, signals and execution that compound."
featured_image: ""
draft: false
author: "Jonas Hyltén"
---

## Informational Advantages Halve in Months, Not Years

Di Mascio, Lines and Naik (2015) analyzed 1.15 million institutional trades over 13 years. The result: positive alpha after initial purchase declines to effectively zero over twelve months. Competition, measured as analyst coverage, accelerates decay markedly in the first three to six months. The effect then disappears.

The same mechanic applies to private equity. A signal identifying a company as an acquisition target has a half-life. When the signal reaches more buyers, via bankers, networks, databases, the pricing advantage shrinks. Bain research shows funds with more than 50% proprietary-sourced deals deliver median 23% IRR versus 16% for intermediary-heavy funds (Bain & Company, 2024, per Bain Global Private Equity Report). But "proprietary" is typically defined loosely: any process without a banker teaser counts. True exclusivity is rare.

Axial research shows the median PE firm captures 18% of relevant deals in its target universe (Axial, 2024, per Axial Deal Sourcing Report). The rest is never seen. The firm that wins is not the one with the biggest network. It is the one that processes the most opportunities with the most depth, rejects fastest, and builds compounding intelligence from every declined deal.

## What "Proprietary" Actually Means

Three definitions circulate.

**Strict:** Bilateral negotiation with the seller, no intermediary, negotiated price. Occurs in lower middle market where owners contact the GP directly.

**Operational:** The GP hears about the deal informally via an accountant or lawyer before the teaser goes out. The same accountant typically calls three to four other funds.

**Narrative:** Bankers run a "limited process" with five selected buyers. All five report the deal as proprietary in their next fund pitch.

Harvard Business School calls this *negotiation*, processes blending auction and direct negotiation. The typical mid-market deal sits here. Multiple buyers are involved. Most call it proprietary. The seller's banker calls it a structured process. Both are right.

Add-on acquisitions complicate the picture. In 2024, add-ons accounted for approximately 74% of all PE deals (Harvard Law School, 2025). Platform companies typically have exclusive insight into targets through commercial relationships. When GPs claim strong proprietary flow, they typically describe add-on programs, not original platform sourcing. The difference matters for LPs evaluating sourcing capability.

## The Edge Comes From Throughput, Not Access

The firm that consistently outperforms on sourcing does not have the most exclusive access. It processes the most CIMs per analyst, with the most depth, and builds institutional memory from every declined deal.

Conversion data: only approximately 1.48% of sourced deals transact. The average firm evaluates roughly 80 opportunities per closed investment (V7 Labs, 2026, per V7 Labs Proprietary Deal Flow Research). At that ratio, a firm with three times the throughput does not need the same exclusivity to close the same number of deals. The funnel width makes throughput win over exclusivity.

The CIM is the real competitive test. Kyung-Ah Park describes in *Two and Twenty* a deal team that won through "accuracy and speed", they made the seller feel "as if they had been a fly on the wall for years." Their IOI (Indication of Interest) reflected deeper analysis than competitors had achieved in the same timeframe. The deal was not proprietary. The preparation was.

Practical method: define a fixed extraction schema for every CIM. Same fields, EBITDA margin, customer concentration, management tenure, leverage profile, regardless of which analyst conducts the review. When the schema is applied systematically, declined deals accumulate as structured data, not anecdotal memory. A firm that has processed 400 deals in industrial distribution over five years with structured output has a sector model no new entrant can replicate quickly. AI document agents make the extraction step scalable. The analyst reviews structured output and logs the investment decision with rationale. Over time, the firm builds a proprietary dataset from semi-public documents, a durable competitive advantage in sourcing.

## The Signal Decay Mechanism in PE

The drivers that determine how fast a signal loses value.

**Information diffusion in networks.** UTS research (FactSet, 7,613 secondary buyouts, 2,230 PE firms) shows transaction information diffuses: 23% reaches one link beyond transacting parties, 16% reaches two links (UTS, 2024, per *Shaking Hands with Common Foes: Clique Premium and Information Diffusion in PE Networks*). Information moves faster in dense cliques. A signal identifying a target in a dense network has a shorter half-life than one in a fragmented sector.

**Crowding and replicability.** Di Mascio et al. show increased analyst coverage reduces post-purchase alpha by 10.9 basis points in month one, 5.8 bp/month in quarter one, zero thereafter. Translated to PE: when more funds access the same data sources (Grata, SourceScrub, commercial databases), the signal's predictive power drops. Commercial databases scrape the same public sources, apply similar classifications, the result is functionally identical target lists for all subscribers.

**Temporal lag.** Praxis Rock (2026) documents that commercial databases reflect a company's state at last indexing, months to years old. A company that grew from $5M to $25M in revenue since last refresh will not appear in searches for greater than $15M. Primary-source data (government registries, industry certifications, environmental permits) updates on regulatory timelines, not commercial ones. They cover every entity required to report, not just those a platform chose to index.

## Three Layers That Compound

Tentt (2026) identifies three infrastructure layers that together close the origination gap.

### 1. Targeting, Precise Mapping, Not Vague Sectors

400-1,200 verified companies with identified decision-makers per investment thesis. Not "industrial automation $10-100M EBITDA." Every company assessed for fit, ownership structure confirmed, relevant contact verified. This requires primary-source data infrastructure: identify relevant government/regulatory databases per vertical, build extraction/normalization pipelines per source, develop entity resolution matching records across inconsistent formats, maintain systems when sources change format.

### 2. Signals, Temporal Monitoring of Timing Events

A static list is a snapshot. Signal monitoring makes it dynamic. A founder who just raised growth capital is not near-term. The same founder, eighteen months later, approaching 65 with a key competitor just acquired, different conversation. Signals: ownership transitions (death, illness, divorce), CEO retirement without succession plan, corporate divestitures (earnings calls, strategic reviews), leadership changes, margin expansion, hiring trends.

### 3. Execution, Contextual Outreach That Converts

This is where most internal BD efforts fail. Junior associate sends a generic LinkedIn message or boilerplate email. Response rate: 0.5-1.5%. Signal-driven, contextual outreach, referencing a specific trigger and demonstrating genuine business awareness, produces 4-7% response rates (Tentt internal data, client engagements 2024-2025). The difference is not just volume. It is the quality of responses and the tone of subsequent conversations.

Technical chain signal to deal:

- Ingestion API (primary-source feeds: company registry API, industry registry webhooks, environmental data ETL jobs nightly)
- Entity resolution pipeline (matches organization numbers across sources, resolves inconsistent names)
- Scoring engine (composite score: signal type strength × company fit × timing urgency)
- Quote/pricing endpoint (translates signal to indicative valuation range)
- CRM log table (timestamp, source, scoring components, outreach status, response)

## Information Advantage vs Process Advantage

Robinson & Sensoy (2013, 2016) show PE fund managers anticipate public company earnings in their specialization sectors, but sell at industry peaks only when carry incentives exist. The information advantage is real but time-limited.

The parallel to PE origination: having data (Grata subscription, SourceScrub license) is not the same as processing data systematically. The firm that builds extraction schema, entity resolution, scoring logic and feedback loops from every declined deal builds a process advantage that improves every quarter. Access is static. Process improves.

EQT's Motherbrain shows the pattern: platform processing deals, people, companies; deal team logs interactions and decisions continuously; reinforcement learning improves models over time. The advantage is not the technology, it is the data and process the technology enables.

## Why Most Firms Stay With Relationships

Three barriers.

**Measurability.** Ask a PE partner about sourcing: "relationships, reputation, in the flow." Ask for a quantified pipeline, how many targets identified last quarter, how many contacted, conversion per stage, most go silent. Without measurement, no incentive to build infrastructure.

**Short-termism.** Fund sizes grow, deployment timelines shrink, pressure to put capital to work is maximal. Ad hoc methods work now. Infrastructure builds value over fund cycles.

**Competency gap.** PE firms do not hire an investment bank every time they evaluate a company. They have internal teams, analytical frameworks, proprietary models. The same logic applies to sourcing. Outsourcing the entire top-of-funnel to bankers simultaneously serving your competitors is the equivalent of outsourcing underwriting. But fewer have internal sourcing competency comparable to their investment team.

## From Relationship-Dependent to Infrastructure-Enabled

The shift underway is not from relationships to technology. Relationships remain essential, they build trust and close transactions. The shift is from relationship-dependent to infrastructure-enabled.

The best firms continue leveraging networks and reputation. But they augment those advantages with systems that:

- Identify opportunities their networks missed
- Reach decision-makers their existing relationships do not cover
- Deliver data that makes every subsequent campaign more effective than the last

Firms building this infrastructure now compound their advantage over the next fund cycle. Those who wait will find the gap widening. In a market with $2.5 trillion dry powder chasing the same pool of quality assets, proprietary origination is not a nice-to-have. It is the last real edge.

Signal decay is not a law. It is a variable. The firm that controls the speed and depth of its process controls the half-life.

## Summary

Signal decay in proprietary origination is driven by information diffusion, crowding and temporal lag in commercial databases. Research shows alpha halves in three to six months when more actors access the same signal (Di Mascio et al., 2015; Bain & Company, 2024). The median PE firm sees 18% of relevant deals (Axial, 2024). Real edge comes not from exclusive access but from three compounding layers: precise targeting (400-1,200 verified companies per thesis), active signal monitoring (temporal triggers), contextual execution (4-7% response rate versus 0.5-1.5% per Tentt internal data 2024-2025). The firm building primary-source data infrastructure with entity resolution, automated scoring and CRM-logged feedback loops builds a process advantage that improves every quarter, while access remains static. In a market with SEK 2.5 trillion dry powder, infrastructure-enabled origination is the last real edge.