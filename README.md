# JSON-LD Types

A set of types for working with JSON LD like a pro.

### Usage

```typescript
import { JsonLd } from '@atlassian/json-ld-types';

const file: JsonLd.Object<JsonLd.Meta.Granted, JsonLd.Data.TextDocument> = {
  meta: {
    access: 'granted',
    visibility: 'restricted',
    auth: [],
    definitionId: 'confluence-object-provider',
  },
  data: {
    '@context': {
      '@vocab': 'https://www.w3.org/ns/activitystreams#',
      atlassian: 'https://schema.atlassian.com/ns/vocabulary#',
      schema: 'http://schema.org/',
    },
    generator: {
      '@type': 'Application',
      '@id': 'https://www.atlassian.com/#Confluence',
      name: 'Confluence',
    },
    '@type': ['Document', 'schema:TextDigitalDocument'],
    url: 'https://product-fabric.atlassian.net/wiki/spaces/SL/pages/876610663/Github+Object+provider',
    name: 'Github Object provider',
    summary: 'This page is within the Smart Links space',
  },
};
```
