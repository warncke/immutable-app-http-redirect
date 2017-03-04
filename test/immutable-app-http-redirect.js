'use strict'

const chai = require('chai')
const assert = chai.assert

const httpRedirect = require('../lib/immutable-app-http-redirect')

describe('immutable-app-http-redirect', function () {

    it('should throw 302 redirect to / by default', function () {
        try {
            httpRedirect()
        }
        catch (err) {
            var threw = err
        }
        // check error
        assert.strictEqual(threw.code, 302)
        assert.strictEqual(threw.url, '/')
    })

    it('should throw 301 redirect to specific url', function () {
        try {
            httpRedirect('/foobar', 301)
        }
        catch (err) {
            var threw = err
        }
        // check error
        assert.strictEqual(threw.code, 301)
        assert.strictEqual(threw.url, '/foobar')
    })

    it('should throw redirect with cookies', function () {
        try {
            httpRedirect(undefined, undefined, 'test')
        }
        catch (err) {
            var threw = err
        }
        // check error
        assert.strictEqual(threw.cookies, 'test')
    })

    it('should throw redirect with headers', function () {
        try {
            httpRedirect(undefined, undefined, undefined, 'test')
        }
        catch (err) {
            var threw = err
        }
        // check error
        assert.strictEqual(threw.headers, 'test')
    })

})