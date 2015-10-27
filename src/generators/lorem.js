import BaseGenerator from './base';
import LOREM_IPSUM, {PARAGRAPHS, WORDS} from '../constants/lorem_ipsum';

export default class Lorem extends BaseGenerator {
    constructor() {
        super();
        this.type = 'paragraphs';
        this.n = 1;
    }

    _generate() {
        switch (this.type) {
            case 'paragraphs':
                return this._getNParagraphs(this.n);
            case 'words':
                return this._getNWords(this.n);
            default:
                throw new Error(`unknown type: ${this.type}`);
        }
    }

    words(n) {
        this.type = 'words';
        this.n = n;
        return this;
    }

    paraghaphs(n) {
        this.type = 'paragraphs';
        this.n = n;
        return this;
    }

    word() {
        this.type = 'words';
        this.n = 1;
        return this;
    }

    paraghaph() {
        this.type = 'paragraphs';
        this.n = 1;
        return this;
    }

    _getNParagraphs(n) {
        let result = [];

        for (let i = 0; i < n; i++) {
            result.push(PARAGRAPHS[i % (PARAGRAPHS.length - 1)]);
        }

        return result.join('\n\n');
    }

    _getNWords(n) {
        let result = [];

        for (let i = 0; i < n; i++) {
            result.push(WORDS[i % (WORDS.length - 1)]);
        }

        return result.join(' ');
    }
}