import {Component, OnInit} from '@angular/core';
import {ExpensesService} from "../../Expenses.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-load-all-expences-data',
  templateUrl: './load-all-expences-data.component.html',
  styleUrls: ['./load-all-expences-data.component.scss']
})
export class LoadAllExpencesDataComponent implements OnInit{

  expenses:Array<any> =[];

  constructor(private service:ExpensesService) {
  }

  ngOnInit(): void {
        this.loadAll();
    }

  loadAll(){
    this.service.loadAll()
      .subscribe(response=>{
        this.expenses=response;
      },error =>{
        console.log(error);
      });
  }

  //use firebase collection to delete
  delete(id:String){
    if (confirm('are you sure?')){
      this.service.delete(id.toString())
        .then(response=>{
          this.expenses = response;
        }).catch(error=>{
        console.log(error);
      })
    }

  }


}
