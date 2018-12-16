import ListEx from './ListEx';
import NavigationTestUtils from "react-navigation/NavigationTestUtils";

describe('Request the api by axios', () => {
  const ListExService = new ListEx();

  it('request post response List', async () => {
    let resPromise = ListExService.ExListPost();
    await resPromise.then( (promiseData) => {
      expect(promiseData.length).toBe(30);
    });
  });

  it('request get response List', async () => {
    let resPromise = ListExService.ExListGet();
    await resPromise.then( (promiseData) => {
      expect(promiseData).toEqual("{\"data\": [\"안개낀 날\", \"너무 더운 날\", \"폭우" +
        " 오는 날\", \"폭설 오는 날\", \"가랑눈\", \"미세먼지\", \"맑은 날\", \"흐린 날\", \"강풍 부는 날\", \"뇌우\", \"너무 추운" +
        " 날\", \"비오는날\", \"보슬비 오는 날\", \"약한 바람\"]}");
    });
  });
});
