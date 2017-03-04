# immutable-app-http-redirect

Throws an error object that will be used by the
[immutable-app](https://www.npmjs.com/package/immutable-app) framework to
generate an http redirect.

## Throwing a 302 redirect

    const httpRedirect = require('immutable-app-http-redirect')

    httpRedirect('/foo/bar')

By default http redirect will do a 302 (temporary) redirect to the given url.
If the URL is falsy '/' will be used as the default destination.

## Throwing a 301 redirect

    httpRedirect('/foo/bar', 301)

To do a 301 (permanent) redirect the 301 code must be passed as the second
argument.

## Throwing a redirect that sets cookies with response

    httpRedirect('/foo', 302, {foo: bar})

The cookies aregument must be an object. Each property will be used as the
cookie name and the value will be used to set/clear the cookie.

If the value is false the cookie is cleared.

If the value is a string the cookie will be set with default options.

If the value is an object the value property of the object will be used as the
cookie value and the rest of the properties will be used to set the cookie
options.

## Throwing a redirect that sets http headers with response

    httpRedirect('/foo', 302, null, {foo: bar})

The headers argument must be an object. The properties and values will be used
to set http headers for the response.