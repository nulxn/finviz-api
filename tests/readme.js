const fs = require("fs");
const path = require("path");
const jsdoc2md = require("jsdoc-to-markdown");

(async () => {
  let template = await fs.readFileSync(
    path.join(__dirname, "template.md"),
    "utf-8"
  );
  await fs.writeFileSync(
    "README.md",
    template.replace(
      "{{slot}}",
      String(
        await jsdoc2md.render({
          files: path.join(__dirname, "..", "index.js"),
        })
      )
        .replaceAll("##", "###")
        .replaceAll("### Functions", "## Functions")
        .replaceAll("&quot;\\&quot;", "&quot;")
        .replaceAll("\\&quot;&quot;", "&quot;")
    )
  );

  console.log("README.md has been generated!");
})();
