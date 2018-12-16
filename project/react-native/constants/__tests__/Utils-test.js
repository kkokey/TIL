import {Utils} from "../Utils";

describe('Utils', () => {
  it('should timestamp to date', function () {
    expect(Utils.getDateStr(1544936969)).toEqual('1/1/1970 9:25:44 AM');
  });

  it('should return string - ', function () {
    expect(Utils.getDateStr()).toEqual('-');
  });

  it('should return number with comman', function () {
    expect(Utils.numberWithCommas(1000000)).toEqual('1,000,000');
  });

  it('should return zero', function () {
    expect(Utils.numberWithCommas(-1)).toEqual('0');
  });

  it('should return api server url', function () {
    expect(Utils.serverUrl()).toEqual('http://54.180.119.179');
  });
});
