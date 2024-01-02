import { Project } from 'ts-morph';

const project = new Project();

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const files = project.getSourceFiles();

function isAbsolutePath(path: string) {
  const layers = ['app', 'entities', 'features', 'shared', 'widgets', 'pages'];
  return layers.some((layer) => path.startsWith(layer));
}

function updateImports() {
  files.forEach((file) => {
    const importDeclarations = file.getImportDeclarations();

    importDeclarations.forEach((declaration) => {
      const moduleSpecifier = declaration.getModuleSpecifierValue();
      if (isAbsolutePath(moduleSpecifier)) {
        const newModuleSpecifier = `@/${moduleSpecifier}`;
        declaration.setModuleSpecifier(newModuleSpecifier);
      }
    });
  });
}

updateImports();

// files.forEach((file) => {
//   file.getImportDeclarations().forEach((declaration) => {
//     console.log(declaration.getModuleSpecifierValue());
//   });
// });

project.save();
