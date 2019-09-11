import { createRequireFromPath as createRequire } from "module";
import ejs from "ejs";
import ejsLint from "ejs-lint";
import caller from "caller";
import { file, resolve } from "ez-file";


export function render(templatePath, data) {
  const absolutePath = resolve(templatePath, caller());
  const templateContent = file(absolutePath);
  
  try {
    return ejs.render(templateContent, {
      ...data,
      require: createRequire(absolutePath),
      include: createInclude(absolutePath, data),
    });
  } catch (error) {
    console.error(error);
    console.error(ejsLint(templateContent));
  }
}

function createInclude(parentPath, data) {
  return function (includePath, includeData) {
    const templatePath = resolve(includePath, parentPath);
    
    return render(templatePath, {
      ...data,
      ...includeData,
    });
  };
}
