import { Component, OnInit } from "@angular/core";
import Hero from "../hero";
import { HEROES } from "../mockheroes";

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.css"]
})
export class HeroesComponent implements OnInit {
  constructor() {}
  ngOnInit() {}

  selectedHero: Hero;

  onSelect = (hero: Hero): void => {
    this.selectedHero = hero;
    this.logHero();
  };

  logHero = () => console.log(this.selectedHero);

  heroes = HEROES;
}
