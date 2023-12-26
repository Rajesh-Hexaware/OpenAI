import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ObjectDataService {
  currentData: any = {};
  private apiKey = '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';
  
  private apiUrl ='https://api.openai.com/v1/chat/completions';
  private dataSubject = new BehaviorSubject<string>('');
  public data$: Observable<string> = this.dataSubject.asObservable();

  updateData(newData: string): void {
    this.dataSubject.next(newData);
  }

  constructor(private http: HttpClient) { }


  setData(datavalue: any):any {
    if (this.currentData) {
      this.currentData = { ...this.currentData, ...datavalue }
    }
    else {
      this.currentData = datavalue
    }
    return this.currentData;
  }
  getData(): void {
    return this.currentData;
  }

  async convertToJSON(input: string): Promise<void> {
    const keyValuePairs = input
      .trim() // Remove leading/trailing whitespace
      .split('\n') // Split the string into lines
      .map((line) => line.split(':').map((item) => item.trim())) // Split each line into key-value pairs
      .filter(([key, value]) => key && value); // Filter out lines without both key and value

    const jsonObject: { [key: string]: string } = {};

    keyValuePairs.forEach(([key, value]) => {
      jsonObject[key] = value;
    });
    let currentData = await this.setData(jsonObject);
    return currentData;
  }

  generateText(prompt: string): Observable<any> {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}`,
    };

    const data = {
      model: 'gpt-3.5-turbo',
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
