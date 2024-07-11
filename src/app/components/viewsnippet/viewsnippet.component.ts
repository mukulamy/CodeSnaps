import { Component } from '@angular/core';
import { DbService } from '../../services/db.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewsnippet',
  standalone: true,
  imports: [],
  templateUrl: './viewsnippet.component.html',
  styleUrl: './viewsnippet.component.css'
})
export class ViewsnippetComponent {
  codeSnippet = {
    title: "",
    code: ""
  }
  constructor(private route: ActivatedRoute, private dbService: DbService){}

  ngOnInit(){
      const docId = this.route.snapshot.paramMap.get('id');
      console.log(docId)
      this.dbService.getSnippetById(docId!).then((data: any)=>{
        this.codeSnippet = data
      })}
}
