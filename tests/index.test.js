import assert from "node:assert/strict";
import { test } from "node:test";
import { project, summarizeProject } from "../src/index.js";

test("Multi-Tenant CRM API exposes project metadata", () => {
  assert.equal(project.slug, "multi-tenant-crm-api");
  assert.ok(project.features.length >= 3);
  assert.match(summarizeProject(), /planned features/);
});
