import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  collections: any = {
    categories_table: "categories",
    users_table: "users",
    topics_table: "topics",
    pages_table: "pages",
    blogs_table: "blogs",
    comments_table: "comments",
  }

  topics: any = [
    {
      id: "GEeFk8iRB23o21O2y0e9",
      name: "Local Services"
    },
    {
      id: "LYQtSQwmgYt5xwjdq5T5",
      name: "Things to do"
    },
    {
      id: "N8IuQxwiztgkHNuMFyNy",
      name: "My Events"
    },
    {
      id: "UTRJH4nGSuP9dOfOnwOL",
      name: "My Shops"
    },
    {
      id: "lIwMUNKPmZuUKJIm8sPm",
      name: "My Places"
    }
  ]

  constructor() { }
}
