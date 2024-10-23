// based & inspired by
// https://github.com/seanWLawrence/markdown-it-plugin-data-src/blob/master/lib/index.js
// https://github.com/camelaissani/markdown-it-include
// https://github.com/tokusumi/markdown-embed-code

/**
 * embed code from relative file paths
 * example:
 * ```md
 * ```c++:./relative/file/to/your/code.cpp
 *  // this code here is overwritten..
 *  // this way you can embed a info here for renderer that do not understand the embedding..
 *  //something like:
 *
 *  // please look at ./relative/file/to/your/code.cpp
 * ```
 * @module embedCode
 * @param {MarkdownIt} md - MarkdownIt instance
 * @returns {undefined} - Side effects only
 * @author Stefan Krüger s-light.eu
 * @version 1.0.0
 * @license MIT
 * @exports embedCode
 */
export default function embedCode(md) {
    const defaultRender =
        md.renderer.rules.code ||
        function (tokens, idx, options, env, self) {
            return self.renderToken(tokens, idx, options);
        };

    md.renderer.rules.code = function (tokens, idx, options, env, self) {
        const token = tokens[idx];
        console.log(`env: `, env);
        console.log(`token: `, token);
        // let srcValue = token.attrGet("src");
        // if (!srcValue.startsWith("http")) {
        //     // console.log(`srcValue: '${srcValue}'`);
        //     // console.log(`env: `, env);
        //     // we think we have a relative path to tweak..
        //     srcValue = srcValue.replace("./", env.filePath);
        //     // console.log(`srcValue: (moded) '${srcValue}'`);
        //     // write back
        //     token.attrSet("src", srcValue);
        //     // console.log("check attr:", token.attrGet("src"));
        // }
        return defaultRender(tokens, idx, options, env, self);
    };
}

