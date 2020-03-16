import { JsonLd } from './jsonld';

describe('JsonLd Types', () => {
  it('works for generic JsonLd response', () => {
    const _jsonLd: JsonLd.Response = {
      meta: {
        access: 'granted',
        visibility: 'restricted',
      },
      data: {
        '@context': {
          '@vocab': 'https://www.w3.org/ns/activitystreams#',
          atlassian: 'https://schema.atlassian.com/ns/vocabulary#',
          schema: 'http://schema.org/',
        },
        '@type': 'Document',
        generator: { '@type': 'Application', '@id': 'https://www.atlassian.com/#Cheese', name: 'Cheese' },
      },
    };
  });

  it('works for JsonLdBlogPostDocument', () => {
    const _jsonLdBlogPostDocument: JsonLd.Object<JsonLd.Meta.Granted, JsonLd.Data.BlogPostDocument> = {
      meta: { access: 'granted', visibility: 'restricted', auth: [], definitionId: 'confluence-object-provider' },
      data: {
        '@context': {
          '@vocab': 'https://www.w3.org/ns/activitystreams#',
          atlassian: 'https://schema.atlassian.com/ns/vocabulary#',
          schema: 'http://schema.org/',
        },
        generator: { '@type': 'Application', '@id': 'https://www.atlassian.com/#Confluence', name: 'Confluence' },
        '@type': ['Document', 'schema:BlogPosting'],
        url: 'https://hello.atlassian.net/wiki/spaces/~akishore/blog/2019/12/18/608752141/Media+Picker+Forge',
        name: 'Media Picker ❤️ Forge',
        summary: 'This blog is within the Abhi Kishore space',
      },
    };
  });

  it('works for JsonLdDocument', () => {
    const _jsonLdDocument: JsonLd.Object<JsonLd.Meta.Granted, JsonLd.Data.Document> = {
      meta: {
        access: 'granted',
        visibility: 'restricted',
        auth: [
          {
            key: 'default',
            displayName: 'dropbox',
            url:
              'https://id.stg.internal.atlassian.com/outboundAuth/start?containerId=de72c012-df8c-46c8-bfbd-103bc23837ef&serviceKey=default',
          },
        ],
        definitionId: '8aff6dd7-e792-4529-9b96-6aa31bab3823',
      },
      data: {
        '@context': {
          '@vocab': 'https://www.w3.org/ns/activitystreams#',
          atlassian: 'https://schema.atlassian.com/ns/vocabulary#',
          schema: 'http://schema.org/',
        },
        '@type': 'Document',
        attributedTo: { '@type': 'Person', name: 'Artur Bodera' },
        context: { '@type': 'Collection', name: 'Root' },
        'schema:fileFormat': 'image/jpeg', // TODO: update these in the Dropbox File code...
        'atlassian:fileSize': 727238, // TODO: update these in the Dropbox File code...
        generator: {
          '@type': 'Application',
          icon: { '@type': 'Image', url: 'https://www.dropbox.com/static/30168/images/favicon.ico' },
          name: 'Dropbox',
        },
        icon: { '@type': 'Image', url: 'https://www.dropbox.com/static/30168/images/favicon.ico' },
        'atlassian:isDeleted': false, // TODO: update these in the Dropbox File code...
        name: 'birdman.jpg',
        updated: '2018-09-24T03:13:13Z',
        url: 'https://www.dropbox.com/s/q3njsd094anqero/birdman.jpg?dl=0',
      },
    };
  });

  it('works for JsonLdDocumentFolder', () => {
    const _jsonLdDocumentFolder: JsonLd.Collection<JsonLd.Meta.Granted, JsonLd.Data.Document> = {
      meta: {
        access: 'granted',
        visibility: 'restricted',
        auth: [
          {
            key: 'gdrive',
            displayName: 'Forge Links - Google Drive',
            url:
              'https://id.atlassian.com/outboundAuth/start?containerId=ff32b4a9-0056-4c40-bb6e-eebf3b1d82f7_c50f3d56-68fc-4c3c-8191-6717f173dc54&serviceKey=gdrive',
          },
        ],
        definitionId: 'fae5b203-c6c4-4a6b-be24-e99c1452520b',
      },
      data: {
        '@context': {
          '@vocab': 'https://www.w3.org/ns/activitystreams#',
          atlassian: 'https://schema.atlassian.com/ns/vocabulary#',
          schema: 'http://schema.org/',
        },
        '@type': 'Collection',
        items: [
          {
            '@type': 'Document',
            attributedTo: { '@type': 'Person', name: 'Linda Dobie' },
            'schema:commentCount': 0, // TODO: update these in the Google Drive Folder code...
            'schema:dateCreated': '2019-10-17T23:18:11.214Z', // TODO: update these in the Google Drive Folder code...
            'schema:fileFormat': 'application/vnd.google-apps.folder', // TODO: update these in the Google Drive Folder code...
            generator: {
              '@type': 'Application',
              icon: { '@type': 'Image', url: 'https://developers.google.com/drive/images/drive_icon.png' },
              name: 'Google Drive',
            },
            icon: {
              '@type': 'Image',
              url: 'https://drive-thirdparty.googleusercontent.com/16/type/application/vnd.google-apps.folder+shared',
            },
            'atlassian:isDeleted': false, // TODO: update these in the Google Drive Folder code...
            name: '05 TOTP (11:30) In Emergency Break Glass',
            updated: '2019-11-07T06:08:36.496Z',
            'atlassian:updatedBy': { '@type': 'Person', name: 'Madeline Dietz' }, // TODO: update these in the Google Drive Folder code...
            url: 'https://drive.google.com/drive/folders/1b_Y78koMLxMul1JJJvcK8k68w8vTn3zz',
          },
        ],
      },
    };
  });

  it('works for JsonLdPresentationDocument', () => {
    const _jsonLdPresentationDocument: JsonLd.Object<JsonLd.Meta.Granted, JsonLd.Data.PresentationDocument> = {
      meta: {
        access: 'granted',
        visibility: 'restricted',
        auth: [
          {
            key: 'default',
            displayName: 'google',
            url:
              'https://id.stg.internal.atlassian.com/outboundAuth/start?containerId=82988061-cc66-426f-8cab-093bdcb4e825&serviceKey=default',
          },
        ],
        definitionId: '00938c7b-99d9-4989-8708-0874938b1a48',
      },
      data: {
        '@context': {
          '@vocab': 'https://www.w3.org/ns/activitystreams#',
          atlassian: 'https://schema.atlassian.com/ns/vocabulary#',
          schema: 'http://schema.org/',
        },
        '@type': ['Object', 'schema:PresentationDigitalDocument'],
        attributedTo: {
          '@type': 'Person',
          image: 'https://lh3.googleusercontent.com/a-/AAuE7mB1p-doYcZMV7WpO6GI96tIGId3x-3X5QCbwbVU=s64',
          name: 'Waldemar Neto',
        },
        'schema:commentCount': 4, // TODO: update these in the Google Drive Presentations code...
        'schema:dateCreated': '2019-11-25T03:41:08.847Z', // TODO: update these in the Google Drive Presentations code...
        'schema:fileFormat': 'application/vnd.google-apps.presentation', // TODO: update these in the Google Drive Presentations code...
        generator: {
          '@type': 'Application',
          icon: { '@type': 'Image', url: 'https://developers.google.com/drive/images/drive_icon.png' },
          name: 'Google Drive',
        },
        icon: {
          '@type': 'Image',
          url: 'https://drive-thirdparty.googleusercontent.com/16/type/application/vnd.google-apps.presentation',
        },
        image: {
          '@type': 'Image',
          url:
            'https://docs.google.com/a/atlassian.com/feeds/vt?gd=true&id=1nDYC3ldnDXVSK7AD4mwZSpsLVvKFSIXzXqeGGnYF0wY&v=22&s=AMedNnoAAAAAXhUnCEAyN8_JNqlt81uc5whPoW-Iiypu&sz=s500',
        },
        'atlassian:isDeleted': false, // TODO: update these in the Google Drive Presentations code...
        name: 'Premortem forge',
        updated: '2019-11-26T22:17:33.371Z',
        'atlassian:updatedBy': {
          // TODO: update these in the Google Drive Presentations code...
          '@type': 'Person',
          image: 'https://lh3.googleusercontent.com/a-/AAuE7mB1p-doYcZMV7WpO6GI96tIGId3x-3X5QCbwbVU=s64',
          name: 'Waldemar Neto',
        },
        url: 'https://docs.google.com/presentation/d/1nDYC3ldnDXVSK7AD4mwZSpsLVvKFSIXzXqeGGnYF0wY/edit?usp=drivesdk',
      },
    };
  });

  it('works for JsonLdSourceCodeDocument', () => {
    const _jsonLdSourceCodeDocument: JsonLd.Object<JsonLd.Meta.Granted, JsonLd.Data.SourceCodeDocument> = {
      meta: {
        visibility: 'restricted',
        access: 'granted',
      },
      data: {
        '@context': {
          '@vocab': 'https://www.w3.org/ns/activitystreams#',
          atlassian: 'https://schema.atlassian.com/ns/vocabulary#',
          schema: 'http://schema.org/',
        },
        '@type': ['Document', 'schema:DigitalDocument'],
        context: {
          '@type': 'Collection',
          name: 'samuel-x.github.io',
        },
        generator: {
          '@type': 'Application',
          name: 'git',
          icon: {
            '@type': 'Image',
            url: 'https://github.githubassets.com/favicon.ico',
          },
        },
        'atlassian:isDeleted': false,
        name: 'jeremy.jpgdfghdfgh',
      },
    };
  });

  it('works for JsonLdSourceCodeCommit', () => {
    const _jsonLdSourceCodeCommit: JsonLd.Object<JsonLd.Meta.Granted, JsonLd.Data.SourceCodeCommit> = {
      meta: {
        access: 'granted',
        visibility: 'restricted',
        auth: [
          {
            key: 'github',
            displayName: 'SmartLinks Spike Github',
            url:
              'https://id.atlassian.com/outboundAuth/start?containerId=c364f950-69f5-4812-9716-ed71a8d3d408_a57ca83d-597f-4de9-8dca-f9d3cd18d3a7&serviceKey=github',
          },
        ],
        definitionId: '22f71965-1e3d-4918-a328-04b791713e57',
      },
      data: {
        '@context': {
          '@vocab': 'https://www.w3.org/ns/activitystreams#',
          atlassian: 'https://schema.atlassian.com/ns/vocabulary#',
          schema: 'http://schema.org/',
        },
        '@id': 'https://github.com/zzarcon/unsplash-client/commit/a45fcbf2c496e0a2548fd0defc8b8f86a4e4616e',
        '@type': 'atlassian:SourceCodeCommit',
        'schema:commentCount': 0,
        'schema:dateCreated': '2019-12-09T07:47:15Z',
        'schema:programmingLanguage': 'TypeScript',
        'atlassian:parent': {
          '@type': 'Link',
          href: 'https://github.com/zzarcon/unsplash-client/commit/be3bc4a3dd205dfa514de8fb98d22275598c90e4',
        },
        url: 'https://github.com/zzarcon/unsplash-client/commit/a45fcbf2c496e0a2548fd0defc8b8f86a4e4616e', // TODO: update this for Github Commits...
        attributedTo: {
          '@type': 'Person',
          image: 'https://avatars0.githubusercontent.com/u/37277351?v=4',
          name: 'kishek95',
        },
        'atlassian:committedBy': {
          '@type': 'Person',
          image: 'https://avatars0.githubusercontent.com/u/37277351?v=4',
          name: 'kishek95',
        },
        preview: {
          '@type': 'Page',
          '@id': '/95c48934edafb9e81920c11ae221a8c9e8891e55',
          content:
            "@@ -10,60 +10,84 @@ interface Urls {\n   small: string;\n   thumb: string;\n }\n-export interface SearchResponse {\n+interface User {\n   id: string;\n-  createdAt: string;\n+  username: string;\n+  name: string;\n+  bio: string;\n+}\n+interface Links {\n+  self: string;\n+  html: string;\n+  download: string;\n+  download_location: string;\n+}\n+\n+interface PhotoRawResponse {\n+  id: string;\n+  created_at: string;\n   height: number;\n   width: number;\n   urls: Urls;\n   description: string;\n+  user: User;\n+  links: Links;\n }\n-\n-interface SearchRawResponseResult {\n+export interface PhotoResponse {\n   id: string;\n-  created_at: string;\n-  height: number;\n+  createdAt: string;\n   width: number;\n+  height: number;\n   urls: Urls;\n   description: string;\n+  user: User;\n+  links: Links;\n }\n+\n interface SearchRawResponse {\n-  results: SearchRawResponseResult[];\n+  results: PhotoRawResponse[];\n }\n+export type SearchResponse = PhotoResponse;\n \n const apiUrl = 'https://api.unsplash.com';\n \n // TODO: add support for AbortController ?\n export class Unsplash {\n   constructor(private accessKey: string) {}\n \n-  async search(query: string, params: SearchOptions = {perPage: 10, page: 1}): Promise<SearchResponse[]> {\n-    const response = await this.request<SearchRawResponse>('/search/photos', {\n+  async search(query: string, params: SearchOptions = {perPage: 10, page: 1}): Promise<PhotoResponse[]> {\n+    const { results } = await this.request<SearchRawResponse>('/search/photos', {\n       query,\n       per_page: params.perPage,\n       page: params.page\n     });\n \n-    return this.mapResponse(response.results);\n+    return results.map(this.mapResponse);\n   }\n \n-  async random(count: number = 10): Promise<SearchResponse[]> {\n-    const response = await this.request<SearchRawResponseResult[]>('/photos/random', {count})\n+  async random(count: number = 10): Promise<PhotoResponse[]> {\n+    const response = await this.request<PhotoRawResponse[]>('/photos/random', {count})\n     \n-    return this.mapResponse(response);\n+    return response.map(this.mapResponse);\n   }\n \n-  private mapResponse = (results: SearchRawResponseResult[]): SearchResponse[] => {\n-    return results.map(result => ({\n-      id: result.id,\n-      createdAt: result.created_at,\n-      height: result.height,\n-      width: result.width,\n-      urls: result.urls,\n-      description: result.description\n-    }));\n+  async lookup(id: string): Promise<PhotoResponse> {\n+    const response = await this.request<PhotoRawResponse>(`/photos/${id}`);\n+\n+    return this.mapResponse(response);\n   }\n \n+  private mapResponse = (photo: PhotoRawResponse): PhotoResponse => ({\n+    id: photo.id,\n+    createdAt: photo.created_at,\n+    height: photo.height,\n+    width: photo.width,\n+    urls: photo.urls,\n+    description: photo.description,\n+    user: photo.user,\n+    links: photo.links,\n+  });\n+\n   private async request<T>(path: string, params?: QueryParams): Promise<T> {\n     const stringifiedParams = stringifyParams({\n       client_id: this.accessKey,",
          mediaType: 'text/x-patch',
          url:
            'https://github.com/zzarcon/unsplash-client/blob/a45fcbf2c496e0a2548fd0defc8b8f86a4e4616e/src/unsplash.tsx',
        },
        context: {
          '@type': 'atlassian:SourceCodeRepository',
          name: 'unsplash-client',
          url: 'https://github.com/zzarcon/unsplash-client',
        },
        generator: {
          '@type': 'Application',
          icon: { '@type': 'Image', url: 'https://github.githubassets.com/favicon.ico' },
          name: 'git',
        },
        name: 'feat: add method for lookup of a single photo.',
      },
    };
  });

  it('works for JsonLdSourceCodePullRequest', () => {
    const _jsonLdSourcePullRequest: JsonLd.Object<JsonLd.Meta.Granted, JsonLd.Data.SourceCodePullRequest> = {
      meta: {
        access: 'granted',
        visibility: 'restricted',
        auth: [
          {
            key: 'github',
            displayName: 'SmartLinks Spike Github',
            url:
              'https://id.atlassian.com/outboundAuth/start?containerId=c364f950-69f5-4812-9716-ed71a8d3d408_a57ca83d-597f-4de9-8dca-f9d3cd18d3a7&serviceKey=github',
          },
        ],
        definitionId: '22f71965-1e3d-4918-a328-04b791713e57',
      },
      data: {
        '@context': {
          '@vocab': 'https://www.w3.org/ns/activitystreams#',
          atlassian: 'https://schema.atlassian.com/ns/vocabulary#',
          schema: 'http://schema.org/',
        },
        '@id': 'https://github.com/zzarcon/unsplash-client/pull/1',
        '@type': ['Object', 'atlassian:SourceCodePullRequest'],
        'schema:dateCreated': '2019-12-09T07:51:04Z',
        'schema:programmingLanguage': 'TypeScript',
        'atlassian:isMerged': true,
        'atlassian:mergeCommit': {
          '@type': 'Link',
          href: 'https://github.com/zzarcon/unsplash-client/commit/f7e8c275d4ce19391fdb8ca291a1bc18080434a8',
        },
        'atlassian:mergeDestination': {
          '@type': 'Link',
          href: 'https://github.com/zzarcon/unsplash-client/tree/master',
        },
        'atlassian:mergeSource': { '@type': 'Link', href: 'https://github.com/kishek95/unsplash-client/tree/master' },
        'atlassian:mergedBy': {
          '@type': 'Person',
          image: 'https://avatars2.githubusercontent.com/u/1194982?v=4',
          name: 'zzarcon',
        },
        'atlassian:reviewedBy': [],
        'atlassian:reviewer': [],
        'atlassian:state': 'closed',
        url: 'https://github.com/zzarcon/unsplash-client/pull/1', // TODO: update this for Github Pull Requests...
        attributedTo: {
          '@type': 'Person',
          image: 'https://avatars0.githubusercontent.com/u/37277351?v=4',
          name: 'kishek95',
        },
        audience: [],
        context: {
          '@type': 'atlassian:SourceCodeRepository',
          name: 'unsplash-client',
          url: 'https://github.com/kishek95/unsplash-client',
        },
        generator: {
          '@type': 'Application',
          icon: { '@type': 'Image', url: 'https://github.githubassets.com/favicon.ico' },
          name: 'git',
        },
        icon: { '@type': 'Image', url: 'https://github.githubassets.com/favicon.ico' },
        name: 'feat: add method for lookup of a single photo.',
        summary:
          'Adding support for the `/photo/:id` endpoint detailed at https://unsplash.com/documentation#get-a-photo to resolve metadata for a specific URL or photo resource. \r\n\r\nMost of the types for this endpoint seem to align with the types for the prior endpoints supported - `/search` and `/photos/random`. This has been reflected by reworking the `SearchRawResponse` to be a collection of `PhotoRawResponse` objects.\r\n\r\nFurthermore, metadata relating to a `user` and related `links` have been added 🙏 ',
        updated: '2019-12-09T07:55:23Z',
      },
    };
  });

  it('works for JsonLdSourceCodeRepository', () => {
    const _jsonLdSourceCodeRepository: JsonLd.Object<JsonLd.Meta.Granted, JsonLd.Data.SourceCodeRepository> = {
      meta: {
        access: 'granted',
        visibility: 'restricted',
        auth: [
          {
            key: 'default',
            displayName: 'bitbucket.org',
            url:
              'https://id.atlassian.com/outboundAuth/start?containerId=ace214a1-9aa5-42c1-bc9c-348d84d218d8&serviceKey=default',
          },
        ],
        definitionId: '838642c6-6405-4bea-8f54-ede44d52fda4',
      },
      data: {
        '@context': {
          '@vocab': 'https://www.w3.org/ns/activitystreams#',
          atlassian: 'https://schema.atlassian.com/ns/vocabulary#',
          schema: 'http://schema.org/',
        },
        '@id': 'https://bitbucket.org/atlassian/atlaskit-mk-2',
        '@type': 'atlassian:SourceCodeRepository',
        'schema:dateCreated': '2017-08-18T00:03:41.517Z',
        'schema:programmingLanguage': 'javascript',
        'atlassian:subscriberCount': 72,
        attributedTo: {
          '@type': 'Person',
          image: 'https://bitbucket.org/account/atlassian/avatar/',
          name: 'atlassian',
        },
        context: {
          '@type': 'atlassian:Project',
          name: 'Project: Atlassian',
        },
        generator: {
          '@type': 'Application',
          icon: {
            '@type': 'Image',
            url: 'https://wac-cdn.atlassian.com/assets/img/favicons/bitbucket/favicon-32x32.png',
          },
          name: 'git',
        },
        icon: {
          '@type': 'Image',
          url: 'https://wac-cdn.atlassian.com/assets/img/favicons/bitbucket/favicon-32x32.png',
        },
        name: 'atlassian/atlaskit-mk-2',
        summary: "Atlassian's official UI library, built according to the Atlassian Design Guidelines.",
        updated: '2020-01-06T22:32:15.134Z',
        url: 'https://bitbucket.org/atlassian/atlaskit-mk-2',
      },
    };
  });

  it('works for JsonLdSpreadsheetDocument', () => {
    const _jsonLdSpreadsheetDocument: JsonLd.Object<JsonLd.Meta.Granted, JsonLd.Data.SpreadSheetDocument> = {
      meta: {
        access: 'granted',
        visibility: 'restricted',
        auth: [
          {
            key: 'default',
            displayName: 'google',
            url:
              'https://id.atlassian.com/outboundAuth/start?containerId=198c2107-88ca-4d84-8426-d78220a472ff&serviceKey=default',
          },
        ],
        definitionId: '5274400a-cca5-42bf-917f-9a3ac5f2a1a4',
      },
      data: {
        '@context': {
          '@vocab': 'https://www.w3.org/ns/activitystreams#',
          atlassian: 'https://schema.atlassian.com/ns/vocabulary#',
          schema: 'http://schema.org/',
        },
        '@type': ['Object', 'schema:SpreadsheetDigitalDocument'],
        attributedTo: { '@type': 'Person', name: 'Artur Bodera' },
        'schema:commentCount': 0, // TODO: update in Google Drive functions...
        'schema:dateCreated': '2018-05-07T04:26:47.944Z', // TODO: update in Google Drive functions...
        'schema:fileFormat': 'application/vnd.google-apps.spreadsheet', // TODO: update in Google Drive functions...
        generator: {
          '@type': 'Application',
          icon: { '@type': 'Image', url: 'https://developers.google.com/drive/images/drive_icon.png' },
          name: 'Google Drive',
        },
        icon: {
          '@type': 'Image',
          url: 'https://drive-thirdparty.googleusercontent.com/16/type/application/vnd.google-apps.spreadsheet',
        },
        'atlassian:isDeleted': false, // TODO: update in Google Drive functions...
        name: 'Shared sheet in org',
        updated: '2018-09-06T04:39:15.979Z',
        'atlassian:updatedBy': { '@type': 'Person', name: 'Artur Bodera' },
        url: 'https://docs.google.com/spreadsheets/d/1pHwRAZWA7_aGtlAwOjAOrHGoT5gT0oKS635HTI6gI8I/edit?usp=drivesdk',
      },
    };
  });

  it('works for JsonLdTask', () => {
    const _jsonLdTask: JsonLd.Object<JsonLd.Meta.Unauthorized, JsonLd.Data.Task> = {
      meta: {
        access: 'unauthorized',
        visibility: 'restricted',
        auth: [
          {
            key: 'default',
            displayName: 'app.asana.com',
            url:
              'https://id.atlassian.com/outboundAuth/start?containerId=24b285dc-0375-4398-884b-dfef95867a88&serviceKey=default',
          },
        ],
        definitionId: 'fffe7473-08a1-4473-a803-f87db09a0f06',
      },
      data: {
        '@context': {
          '@vocab': 'https://www.w3.org/ns/activitystreams#',
          atlassian: 'https://schema.atlassian.com/ns/vocabulary#',
          schema: 'http://schema.org/',
        },
        '@type': 'atlassian:Task',
        generator: {
          '@type': 'Application',
          icon: {
            '@type': 'Image',
            url:
              'https://avatar-cdn.atlassian.com/5c5d0c80b76d5c34f359dbcb?by=id&d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAP-3.svg',
          },
          name: 'Asana Object Provider',
        },
        url: 'https://app.asana.com/0/0/1145492488495133/f',
      },
    };
  });

  it('works for JsonLdTextDocument', () => {
    const _jsonLdTextDocument: JsonLd.Object<JsonLd.Meta.Granted, JsonLd.Data.TextDocument> = {
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
  });

  it('works for JsonLdTextDocument with actions', () => {
    const _jsonLdTextDocument: JsonLd.Object<JsonLd.Meta.Granted, JsonLd.Data.TextDocument> = {
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
        'schema:potentialAction': [
          {
            '@type': 'ViewAction',
            identifier: 'confluence-object-provider',
          },
        ],
      },
    };
  });

  it('works for JsonLdTextDocument with preview - using content HTML', () => {
    const _jsonLdTextDocument: JsonLd.Object<JsonLd.Meta.Granted, JsonLd.Data.TextDocument> = {
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
        preview: {
          '@type': 'Object',
          content: '<div><iframe src="https://my.sick.embed" /></div>',
        },
      },
    };
  });

  it('works for JsonLdTextDocument with preview - using link only', () => {
    const _jsonLdTextDocument: JsonLd.Object<JsonLd.Meta.Granted, JsonLd.Data.TextDocument> = {
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
        preview: {
          '@type': 'Link',
          href: 'https://my.sick.embed',
        },
      },
    };
  });
});
