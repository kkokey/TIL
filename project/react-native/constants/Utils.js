const Utils = {
  getDateStr(timestamp) {
    if( timestamp === '' || timestamp === undefined) {
      return '-';
    }
    const tranDate = new Date(timestamp / 1000);
    return tranDate.toLocaleDateString() +' '+ tranDate.toLocaleTimeString();
  },

  numberWithCommas(number) {
    if( Number(number) > 0 ){
      return number.toLocaleString('en');
    }
    return '0';
  },

  serverUrl() {
    return 'http://54.180.119.179';
  }
};

export { Utils };
