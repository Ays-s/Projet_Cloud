import { getAllSysinfo , ISystemInformation, formatInfo} from './index';

function isISystemInformation(object: any): object is ISystemInformation {
  return 'cpu' in object &&
         'system' in object &&
         'mem' in object &&
         'os' in object &&
         'currentLoad' in object &&
         'processes' in object &&
         'diskLayout' in object &&
         'networkInterfaces' in object
          ;
};


describe('typeScript test suite', () => {
  it('should be ISI', async () => {
    expect.assertions(1);
    const sysInfo = await formatInfo(getAllSysinfo());
    expect(isISystemInformation(sysInfo)).toBeTruthy();
  });
});
