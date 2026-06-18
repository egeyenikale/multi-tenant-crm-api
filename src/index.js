export const project = {
  slug: "multi-tenant-crm-api",
  title: "Multi-Tenant CRM API",
  description: "CRM API that supports multiple companies.",
  features: [
  "Tenant management",
  "Company records",
  "Contact records",
  "Lead management",
  "Opportunity management",
  "Activity history"
  ]
};

export function summarizeProject() {
  return `${project.title}: ${project.features.length} planned features`;
}
