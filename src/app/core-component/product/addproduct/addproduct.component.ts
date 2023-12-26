import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from 'src/app/core/helpers/routes';
import { ObjectDataService } from 'src/app/core/service/data/objectdata.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent implements OnInit {
  public routes = routes;
  contentStep=1;
  contentStepfordesign: number = 1;
  Quality: string = `Quality and Durability:
  
Design and Aesthetics:
  
Functionality:

Technology or Materials:

Customization Options:`;
Sustainability: string = `Sustainability:

Value for Money:

Unique Selling Points (USPs):

Customer Benefits:`;
Brand : string = `Brand Story and Heritage:

Customer Feedback and Reviews:

Market Gap:`;
Presentation : string = `Presentation and Packaging:`;
Strategic: string = `Strategic Collaborations:`;
  Additional: string = `Additional-Information:`;
  newLine: any =`\n`;
  message: any;
  constructor(
    private globalObject:ObjectDataService,
    private router: Router) { }

  ngOnInit(): void {
  } 

  setCurrentStep(step: number): void {
    this.contentStep = step;
  }
  setCurrentStepfordesign(step: number): void{
    this.contentStepfordesign = step; 
  }

  copyTextToClipboard(text: string): void {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);  
  }
  onSubmit() {

    let gettingString = `${this.Quality}${this.newLine}${this.Sustainability}${this.newLine}${this.Brand}${this.newLine}${this.Presentation}${this.newLine}${this.Strategic}${this.newLine}${this.Additional}`;
    let globaData = this.globalObject.convertToJSON(gettingString);
    globaData.then((result: any) => {
      console.log('result', result);
      let stringified = JSON.stringify(result)
    let stringAllongWithQuestion = `${stringified}${this.newLine} provide brand preference for the information within 160 words`;

      this.globalObject.generateText(stringAllongWithQuestion).subscribe((result:any) => {
        this.message = result.choices[0].message.content;
        this.globalObject.updateData(this.message);
        // setTimeout(() => {
          this.router.navigate([routes.categoryList]);
        // }, 3000);
        
      });
    }).catch((error) => {
      console.error(error);
    });
  }
}
