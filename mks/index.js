// import * as matter from "gray-matter";
import * as matter from "gray-matter-browser";

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

    const funktionen_dir = import.meta.glob("./funktionen/*/*.md", {
        as: 'raw',
        eager: true,
    });
    for (const path in funktionen_dir) {
        console.log(path);
        const mdContent = funktionen_dir[path];
        // console.log("mdContent:", mdContent);
        const funktionen_name = path.replace("./funktionen/", "").replace("/readme.md", "");
        const mksFn = mksContent["funktionen"];
        mksFn[funktionen_name] = { bauteile: {} };

        // extract / parse front matter
        // https://github.com/jonschlinkert/gray-matter
        mksFn[funktionen_name][path] = matter(funktionen_dir[path]);

        console.log(`${funktionen_name}`, mksFn[funktionen_name]);
    }

    // console.log("mksContent:", mksContent);
    console.groupEnd();
    return mksContent;
};

export default mksContent();
