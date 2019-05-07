package ilkPaketim
import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._

class ilkClass extends Simulation{

  //Http Protocol Tanımı
  val httpProtocol= http.baseUrl("http://newtours.demoaut.com/").header("User-Agent","Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.103 Mobile Safari/537.36")

  //Header Tanımı
  val header_1=Map(
    "accept" ->"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
    "accept-encoding" ->"gzip, deflate,br",
    "accept-language"->"en-US;q=0.9"
  )

  //Senaryo Tanımı
  val scn = scenario("viewCruise").exec(http("req_1").get("/mercurycruise.php").headers(header_1)).pause(10)

  setUp(scn.inject(atOnceUsers(50))).protocols(httpProtocol)
}
