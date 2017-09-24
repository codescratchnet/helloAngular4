import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  private skills:string[]  = ["xxx","yyy"]
  private tbxSkill = "555"
  constructor() { }

  ngOnInit() {
  }

  addSkill(skill:string){
    this.skills.unshift(skill);
    this.tbxSkill = ""
    return false;
  }

  removeSkill(skillIndex:number){
    this.skills.forEach((elementIndex, index) => {
        if(skillIndex == index){
          this.skills.splice(index,1)
        }
        
    })
  }

}
