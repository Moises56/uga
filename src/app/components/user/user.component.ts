import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';

interface User {
	name: string;
	flag: string;
	area: number;
	population: number;
}

const USERS: User[] = [
	{
		name: 'Mou',
		flag: 'f/f3/Flag_of_Russia.svg',
		area: 17075200,
		population: 146989754,
	},
	{
		name: 'Xiam',
		flag: 'c/cf/Flag_of_Canada.svg',
		area: 9976140,
		population: 36624199,
	},
	{
		name: 'Smith',
		flag: 'a/a4/Flag_of_the_United_States.svg',
		area: 9629091,
		population: 324459463,
	},
	{
		name: 'Jhon',
		flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
		area: 9596960,
		population: 1409517397,
	},
];

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  users = USERS;

}
