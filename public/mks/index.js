// import * as matter from "gray-matter";
import matter from "gray-matter";
// import * as matter from "gray-matter-browser";

// // console.log(file_list);
// for (const item of Object.keys(file_list).sort()) {
//     console.log(item);
// }
// const file_tree = () => {
//     let file_tree = {};
//     const dir_funktionen = import.meta.glob("./*/*.md", {
//         query: "?raw",
//         // import: "default",
//     });
//     console.log(dir_funktionen);
//     dir_funktionen.en;
//     return file_tree;
// }

// export default file_tree();

const mksContent = () => {
    console.group("mksContent");
    let mksContent = {
        welcome: {},
        funktionen: {},
    };

    mksContent["welcome"] = import.meta.glob("./readme.md", {
        as: "raw",
        eager: true,
    });
    mksContent["welcome"]["./readme.md"] = matter(mksContent["welcome"]["./readme.md"]);
    mksContent["welcome"]["path_base"] = "mks/";

    const funktionen_dir = import.meta.glob("./funktionen/*/readme.md", {
        as: "raw",
        eager: true,
    });
    for (const path in funktionen_dir) {
        console.log(path);
        // const mdContent = funktionen_dir[path];
        // console.log("mdContent:", mdContent);
        const funktionen_name = path.replace("./funktionen/", "").replace("/readme.md", "");
        const mksFn = mksContent["funktionen"];
        mksFn[funktionen_name] = { bauteile: {} };

        mksFn[funktionen_name]["path_readme"] = path;
        mksFn[funktionen_name]["path_base"] =
            path.replace("./", "mks/").replace("/readme.md", "/");
        // extract / parse front matter
        // https://github.com/jonschlinkert/gray-matter
        mksFn[funktionen_name]["./readme.md"] = matter(funktionen_dir[path]);

        console.log(`${funktionen_name}`, mksFn[funktionen_name]);
    }

    // console.log("mksContent:", mksContent);
    console.groupEnd();
    return mksContent;
};

export default mksContent();
