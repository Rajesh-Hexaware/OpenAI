// import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class OpenaiService {
 
  //private apiKey = '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';
  private apiKey = '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';
  private apiUrlh = 'https://api.openai.com/v1/engines/davinci/completions';
 
  private apiUrl ='https://api.openai.com/v1/chat/completions';
 
  constructor(private http: HttpClient) {}
 
  generateText(prompt: string): Observable<any> {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}`,
    };
 
    // const data = {
    //   prompt,
    //   model: 'text-davinci-002',
    //   max_tokens: 100,
    // };
    const data = {
      model: 'gpt-3.5-turbo', // Adjust the model name as needed
      messages: [
        {
          role: 'system',
          content: 'You are a helpful assistant.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
    };
 
    return this.http.post<any>(this.apiUrl, data, { headers });
   
  }
  downloadCsv(data: any[], filename: string): void {
    const csvContent = this.convertArrayToCsv(data);
 
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
 
    const link = document.createElement('a');
    link.href = url;
    link.download = filename + '.csv';
    link.click();
 
    window.URL.revokeObjectURL(url);
  }
 
  private convertArrayToCsv(data: any[]): string {
    const header = Object.keys(data[0]).join(',');
    const rows = data.map(obj => Object.values(obj).join(','));
 
    return header + '\n' + rows.join('\n');
  }
}
