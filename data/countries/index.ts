import type { CountryData, CityData } from "../types";

import { usa } from "./usa";
import { uk } from "./uk";
import { canada } from "./canada";
import { australia } from "./australia";
import { germany } from "./germany";
import { uae } from "./uae";
import { india } from "./india";
import { singapore } from "./singapore";
import { newZealand } from "./new-zealand";
import { france } from "./france";
import { netherlands } from "./netherlands";
import { saudiArabia } from "./saudi-arabia";
import { qatar } from "./qatar";
import { ireland } from "./ireland";
import { switzerland } from "./switzerland";
import { austria } from "./austria";
import { sweden } from "./sweden";
import { italy } from "./italy";
import { spain } from "./spain";
import { japan } from "./japan";

export const ALL_COUNTRIES: CountryData[] = [
  usa,
  uk,
  canada,
  australia,
  germany,
  uae,
  india,
  singapore,
  newZealand,
  france,
  netherlands,
  saudiArabia,
  qatar,
  ireland,
  switzerland,
  austria,
  sweden,
  italy,
  spain,
  japan,
];

export function getCountry(slug: string): CountryData | undefined {
  return ALL_COUNTRIES.find((c) => c.slug === slug);
}

export function getCity(
  countrySlug: string,
  citySlug: string
): { country: CountryData; city: CityData } | undefined {
  const country = getCountry(countrySlug);
  if (!country) return undefined;
  const city = country.cities.find((c) => c.slug === citySlug);
  if (!city) return undefined;
  return { country, city };
}

export function getAllServiceParams(): { service: string }[] {
  const serviceSlugs = [
    "on-page-seo",
    "technical-seo",
    "link-building",
    "local-seo",
    "content-strategy",
    "seo-audit",
  ];
  return serviceSlugs.map((s) => ({ service: s }));
}

export function getAllCountryParams(): {
  service: string;
  country: string;
}[] {
  const services = getAllServiceParams();
  const params: { service: string; country: string }[] = [];
  for (const s of services) {
    for (const country of ALL_COUNTRIES) {
      params.push({ service: s.service, country: country.slug });
    }
  }
  return params;
}

export function getAllCityParams(): {
  service: string;
  country: string;
  city: string;
}[] {
  const services = getAllServiceParams();
  const params: { service: string; country: string; city: string }[] = [];
  for (const s of services) {
    for (const country of ALL_COUNTRIES) {
      for (const city of country.cities) {
        params.push({
          service: s.service,
          country: country.slug,
          city: city.slug,
        });
      }
    }
  }
  return params;
}

export function getNearbyCities(
  country: CountryData,
  citySlug: string,
  limit = 20
): CityData[] {
  const city = country.cities.find((c) => c.slug === citySlug);
  if (!city) return country.cities.slice(0, limit);

  // Prioritize nearby cities if specified, then same region, then others
  const nearby: CityData[] = [];
  if (city.nearbyMajorCities) {
    for (const slug of city.nearbyMajorCities) {
      const found = country.cities.find((c) => c.slug === slug);
      if (found) nearby.push(found);
    }
  }
  if (city.region) {
    for (const c of country.cities) {
      if (
        c.slug !== citySlug &&
        c.region === city.region &&
        !nearby.find((n) => n.slug === c.slug)
      ) {
        nearby.push(c);
      }
    }
  }
  for (const c of country.cities) {
    if (c.slug !== citySlug && !nearby.find((n) => n.slug === c.slug)) {
      nearby.push(c);
    }
  }
  return nearby.slice(0, limit);
}
