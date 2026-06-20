export type IUseFps = {
  isEnabled?: boolean;

  precision?: number;

  updateInterval?: number;
};

export type IUseFpsResult = {
  fps: number;

  frameTime: number;

  isSupported: boolean;
};
