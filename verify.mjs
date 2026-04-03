import { readdirSync, existsSync, statSync } from 'fs';
import { join } from 'path';

const root = new URL('.', import.meta.url).pathname;

function check(path, label) {
  const full = join(root, path);
  const exists = existsSync(full);
  const type = exists ? (statSync(full).isDirectory() ? 'DIR' : 'FILE') : 'MISSING';
  console.log(`${exists ? '✅' : '❌'} [${type}] ${label}: ${path}`);
  return exists;
}

console.log('\n=== VERIFYING PROGRAMMATIC SEO FILES ===\n');

// Data files
check('data/services.ts', 'Services data');
check('data/countries.ts', 'Countries data');
check('data/schema.ts', 'Schema helpers');

// Components
console.log('');
check('components/services/Breadcrumb.tsx', 'Breadcrumb');
check('components/services/ServiceHero.tsx', 'ServiceHero');
check('components/services/IncludedGrid.tsx', 'IncludedGrid');
check('components/services/ProcessTimeline.tsx', 'ProcessTimeline');
check('components/services/FAQAccordion.tsx', 'FAQAccordion');
check('components/services/CountryGrid.tsx', 'CountryGrid');
check('components/services/CityGrid.tsx', 'CityGrid');
check('components/services/RelatedServices.tsx', 'RelatedServices');
check('components/services/CTASection.tsx', 'CTASection');

// Dynamic routes
console.log('');
check('app/services/[service]/page.tsx', 'Level 1: Service page');
check('app/services/[service]/ServicePageClient.tsx', 'Level 1: Client component');
check('app/services/[service]/[country]/page.tsx', 'Level 2: Country page');
check('app/services/[service]/[country]/CountryPageClient.tsx', 'Level 2: Client component');
check('app/services/[service]/[country]/[city]/page.tsx', 'Level 3: City page');
check('app/services/[service]/[country]/[city]/CityPageClient.tsx', 'Level 3: Client component');

// Sitemap
console.log('');
check('app/sitemap.ts', 'Sitemap');

// List the services directory
console.log('\n=== SERVICES DIR CONTENTS ===');
try {
  const servicesDir = join(root, 'app/services');
  const items = readdirSync(servicesDir);
  items.forEach(item => {
    const full = join(servicesDir, item);
    const isDir = statSync(full).isDirectory();
    console.log(`  ${isDir ? '📁' : '📄'} ${item}`);
    if (isDir) {
      try {
        const sub = readdirSync(full);
        sub.forEach(s => console.log(`    ${statSync(join(full, s)).isDirectory() ? '📁' : '📄'} ${s}`));
      } catch(e) {}
    }
  });
} catch(e) {
  console.log('  ERROR:', e.message);
}

console.log('\n=== DONE ===\n');
