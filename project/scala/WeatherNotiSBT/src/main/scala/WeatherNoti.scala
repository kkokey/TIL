import net.minidev.json.{JSONObject, JSONValue, JSONArray}
import scalaj.http._

object WeatherNoti {
  var rs: Any = _
  def main(args: Array[String]): Unit = {
    val url = "http://newsky2.kma.go.kr/service/SecndSrtpdFrcstInfoService2/ForecastSpaceData"
    val response: HttpResponse[String] = Http(url)
      .header("Content-Type","application/json;charset=UTF-8")
      .param("serviceKey","[KEY]")
      .param("base_date","20181212")
      .param("base_time","0800")
      .param("nx","58")
      .param("ny","127")
      .param("_type","json")
      .timeout(5000, 5000)
      .asString
//    println(response.body)
    var parseData = JSONValue.parse(response.body)
    parseData match {
      case json: JSONObject => getKey("fcstValue", json)
    }

    def getKey(key: String, jsonData: JSONObject): Any = {
      jsonData.keySet().iterator().forEachRemaining(keyStr => {
        jsonData.get(keyStr) match {
          case jData: JSONObject => getKey(key, jData)
          case jData: JSONArray =>
            jData.forEach {
              case value: JSONObject => getKey(key, value)
            }
          case _ => ""
        }
      })

      if(jsonData.keySet().contains(key) && jsonData.get("category").equals("T3H")) {
        println("first:::"+key+"_"+jsonData.keySet().contains(key)+"_"+jsonData.get(key))
        rs = jsonData.get(key)
        val notiRes: HttpResponse[String] = Http("https://notify-api.line.me/api/notify")
          .header("content-type", "multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW")
          .header("Authorization", "Bearer [AUTH KEY]")
          .postData("------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"message\"\r\n\r\n온도:"+rs+"\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW--")
          .asString
      }
    }
  }
}

// JSON parse lib source : http://www.furidamu.org/blog/2012/09/18/beautiful-json-parsing-in-scala/
