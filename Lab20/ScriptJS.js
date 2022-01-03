let areas = document.querySelector("map");
let info = document.querySelector(".description");
let title = document.querySelector(".title");
let description = document.querySelector(".text");

let Bus =
  "A bus (contracted from omnibus,[1] with variants multibus, motorbus, autobus, etc.) is a public transport road vehicle designed to carry significantly more passengers that the average cars or vans. Buses can have a capacity as high as 300 passengers,[2] although the average bus usually carries between 30 to 100.";

let Trolleybus =
  'A trolleybus (also known as trolley bus, trolley coach, trackless trolley, trackless tram – in the 1910s and 1920s[1] – or trolley[2][3]) is an electric bus that draws power from dual overhead wires (generally suspended from roadside posts) using spring-loaded trolley poles.';

let Taxi =
  "TA taxi, also known as a cab or a taxicab, is a type of vehicle for hire with a driver, used by a single passenger or small group of passengers, often for a non-shared ride. A taxicab conveys passengers between locations of their choice. This differs from public transport where the pick-up and drop-off locations are decided by the service provider, not by the customers, although demand responsive transport and share taxis provide a hybrid bus/taxi mode";

let Electric_Train =
  "An electric locomotive is a locomotive powered by electricity from overhead lines, a third rail or on-board energy storage such as a battery or a supercapacitor. Locomotives with on-board fueled prime movers, such as diesel engines or gas turbines, are classed as diesel-electric or gas turbine-electric and not as electric locomotives, because the electric generator/motor combination serves only as a power transmission system.";

areas.addEventListener("mouseover", (e) => {
  info.style.opacity = 1;
  e.target.focus();
  switch (e.target.alt) {
    case "Bus": {
      title.textContent = e.target.alt;
      description.textContent = Bus;
      break;
    }
    case "Trolleybus": {
      title.textContent = e.target.alt;
      description.textContent = Trolleybus;
      break;
    }
    case "Taxi": {
      title.textContent = e.target.alt;
      description.textContent = Taxi;
      break;
    }
    case "Electric_Train": {
      title.textContent = e.target.alt;
      description.textContent = Electric_Train;
      break;
    }
  }
  e.target.addEventListener("mouseout", () => {
    info.style.opacity = 0;
    e.target.blur();
  });
});

areas.addEventListener("click", () => console.log("object"));
