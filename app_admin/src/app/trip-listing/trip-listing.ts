import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Trip } from '../models/trip';
import { TripCard } from '../trip-card/trip-card';
import { TripData } from '../services/trip-data';
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core'; // Change: Import ChangeDetectorRef for manual change detection 
// due to Hot Reload issues displaying blank page
import { Authentication } from '../services/authentication';


@Component({
  selector: 'app-trip-listing',
  standalone: true,
  imports: [CommonModule, TripCard],
  templateUrl: './trip-listing.html',
  styleUrl: './trip-listing.css',
  providers: [TripData]
})
export class TripListing implements OnInit {
  trips!: Trip[]; 
  message: string = '';


  


constructor(
  private tripData: TripData, 
  private cdr: ChangeDetectorRef, 
  private authentication: Authentication,
  private router: Router) { // Change: Inject ChangeDetectorRef for manual change detection

  console.log('trip-listing constructor');
}

public addTrip(): void {
  this.router.navigate(['/add-trip']);
}

private getStuff(): void {
    this.tripData.getTrips().subscribe({
      next: (value: any) => {
        this.trips = value;
        if (value.length > 0) {
          this.message = 'There are ' + value.length + ' trips available.';
        } 
        else {
          this.message = 'There are no trips retrieved from the database.';
        } 
        console.log(this.message);
      this.cdr.detectChanges(); // <-- force template update
    },
    error: (error: any) => {
        console.error('Error: ' + error);
      }
    });
  }
  public isLoggedIn(): boolean 
  { 
  return this.authentication.isLoggedIn(); 
  } 

  ngOnInit(): void {
    console.log('ngOnInit');
    this.getStuff();
  }

}


