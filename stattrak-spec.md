# StatTrak Spec

## What is StatTrak

StatTrak is the API endpoint which serves all analytics data from the Reflected URL Shortener, which is used across PMS sites and available at several endpoints for backwards compatibility.

## Endpoints
### Filled with example responses

<br />

rnwk.xyz/stattrak
```
(Redirects to this page)
```

<br />

rnwk.xyz/stattrak/list
```javascript
{
  urls: [
    {
      slug: 'blog/goblins', // The 'slug' used to access the redirect
      hits: 2, // The total # of hits
    },

    // Can continue forever
  ],
}
```

<br />

rnwk.xyz/stattrak/stat/`:slug`
```javascript
{
  hits: 8, // The total hits this redirect recieved
  devices: { // Number of hits on each type of device
    mobile: 2,
    desktop: 6,

    // Can have infinite device types
  },
  referrer: {
    twitter: 3,
    tumblr: 3,

    // Can have infinite referrer types
  },
}
```
