/* eslint-disable no-unused-expressions */
import { fixture, assert } from "@open-wc/testing";
import '../sophos-icon';

describe('Suite cases', () => {
    it('First Test', async () => {
        const _element = await fixture('<sophos-icon></sophos-icon>');
        const data = {
        iconText : 'Icon text',
        imageSource : './assets/contact-icon.png',
        imageAlt : 'not picture',
        iconDirection : 'left'
        }
        _element.iconText = data.iconText;
        _element.imageSource = data.imageSource;
        _element.imageAlt = data.imageSource;
        _element.iconDirection = data.iconDirection;
        assert.strictEqual(_element.iconText, data.iconText);
        assert.strictEqual(_element.imageSource, data.imageSource);
        assert.strictEqual(_element.imageAlt, data.imageSource);
        assert.strictEqual(_element.iconDirection, data.iconDirection);
    });
});