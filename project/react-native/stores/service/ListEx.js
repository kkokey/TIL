import { Utils } from '../../constants/Utils';
import axios from 'axios';
import Wallet from '../model/modelEx';

class ListEx {
  constructor() {
    this.state = {
      wallets: []
    };
    /* new ListModel() ... */
  }

  async ExListPost() {
    let postData = 'enddate: "20181212103125"\nfrom: 0\nsearchText: ""\nsearchType: "all"\nstartdate: "20181115"\ntype: "t15"';
    return await new Promise((resolve, reject) => {
      axios.post('https://globalmonitor.einfomax.co.kr/apis/usa/news/getnewsall', postData)
        .then(res => {
          resolve(res.data.data);
        }).catch(err => {
        reject(err);
      });
    });
  }

  async ExListGet(){
    return await new Promise((resolve, reject) => {
      axios.get('http://188.166.232.232:8080/weatherlist')
        .then(res => {
          console.log(res.data);

          resolve(res.data);
        }).catch(error => {
          reject(error)
        });
    });
  }
}

export default ListEx;
