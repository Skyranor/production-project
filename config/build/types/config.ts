export type BuildMode = 'development' | 'production';

export interface buildPaths {
  entry: string;
  build: string;
  html: string;
  src: string;
}

export interface BuildEnv {
  mode: BuildMode;
  port: number;
}

export interface BuildOptions {
  mode: BuildMode;
  paths: buildPaths;
  isDev: boolean;
  port: number;
}
