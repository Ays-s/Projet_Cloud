import * as http from "http";
import * as si from "systeminformation";


export interface ISystemInformation {
  cpu: si.Systeminformation.CpuData;
  system: si.Systeminformation.SystemData;
  mem: si.Systeminformation.MemData;
  os: si.Systeminformation.OsData;
  currentLoad: si.Systeminformation.CurrentLoadData;
  processes: si.Systeminformation.ProcessesData;
  diskLayout: si.Systeminformation.DiskLayoutData[];
  networkInterfaces: si.Systeminformation.NetworkInterfacesData[];
}


export function getAllSysinfo() {
  return Promise.all([
      si.cpu(),
      si.system(),
      si.mem(),
      si.osInfo(),
      si.currentLoad(),
      si.processes(),
      si.diskLayout(),
      si.networkInterfaces()
  ])
}

export function getUserSysinfo() {
  return Promise.all([
      si.users()
  ])
}

export function formatInfo(info):ISystemInformation {
  const formatedInfo : ISystemInformation = {
    cpu:                info[0],
    system:             info[1],
    mem:                info[2],
    os:                 info[3],
    currentLoad:        info[4],
    processes:          info[5],
    diskLayout:         info[6],
    networkInterfaces:  info[7],
  }
  return formatedInfo;
}

export function formatUser(info):ISystemInformation {
  const formatedInfo : ISystemInformation = {
    user:   info[0],
  }
  return formatedInfo;
}

const requestListener = async (request, reponse) => {
  switch (request.url) {
    case '/api/v1/sysinfo': {
      reponse.writeHead(200, {'Content-type': 'application/json'});
      const sysInfo = await getAllSysinfo();
      reponse.write(JSON.stringify(formatInfo(sysInfo)));
      break;
    }
    case '/api/v1/userinfo': {
      reponse.writeHead(200, {'Content-type': 'application/json'});
      const sysInfo = await getUserSysinfo();
      reponse.write(JSON.stringify(formatUser(sysInfo)));
      break;
    }
    default: {
      reponse.statusCode = 404;
      reponse.write('Error 404 - Not Found');
    }
  } 
  reponse.end();
  };

const server= http.createServer(requestListener);
const port = (process.env.PORT || 5000);
server.listen(port);