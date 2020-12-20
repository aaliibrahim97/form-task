import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { fromEvent } from 'rxjs';
import { Form } from './interfaces/form';
import { Input } from './interfaces/input';
import { debounceTime, pluck } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {



  Json: Form[] = []

  showjson: string


  textBoxs: any[] = [];

  showtextBoxs: string

  textBoxsNo: number = 0


  labels: any[] = [];

  showLabels: string

  LabelsNo: number = 0


  radios: any[] = [];

  showRadios: string

  radioNo: number = 0

  checkboxs: any[] = [];

  showCheckboxs: string

  chechboxNo: number = 0

  updateValuesBtn: boolean = false

  ngOnInit() {

    const textarea = document.getElementById('textarea')

    const fromevent = fromEvent(textarea, 'keyup')

    const pluckk = fromevent.pipe(pluck('target', 'value'), debounceTime(5000))

    pluckk.subscribe((value: string) => {

      this.showjson = value

      //textboxs

      if (this.showjson.match(/textBox/gi) == null) {

        console.log('no inputs matches')

      }

      else {

        if (this.showjson.match(/textBox/gi).length === this.textBoxsNo) {

          console.log('no new inputs', this.textBoxsNo, this.showjson.match(/textBox/gi).length)

        }
        else {

          this.textBoxsNo += 1

          console.log(this.textBoxsNo)

          for (let i = 0; i < this.showjson.match(/textBox/gi).length; i++) {

            this.textBoxs.push({ textBox: '' })

            this.textBoxs.splice(this.showjson.match(/textBox/gi).length, this.showjson.match(/textBox/gi).length + 1)

            this.showtextBoxs = JSON.stringify(this.textBoxs)

            console.log(this.textBoxs)

          }
        }
      }

      //label   

      if (this.showjson.match(/label/gi) == null) {

        console.log("no label matches")

      }
      else {

        if (this.showjson.match(/label/gi).length === this.LabelsNo) {

          console.log('no new labels', this.LabelsNo, this.showjson.match(/label/gi).length)

        }
        else {

          this.LabelsNo += 1

          console.log(this.LabelsNo)

          for (let i = 0; i < this.showjson.match(/label/gi).length; i++) {

            this.labels.push({ label: 'Label' })

            this.labels.splice(this.showjson.match(/label/gi).length, this.showjson.match(/label/gi).length + 1)

            this.showLabels = JSON.stringify(this.labels)

            console.log(this.labels)

          }
        }
      }

      //radio

      if (this.showjson.match(/radio/gi) == null) {

        console.log("no radio matches")

      }

      else {

        if (this.showjson.match(/radio/gi).length === this.radioNo) {

          console.log('no new radios', this.radioNo, this.showjson.match(/radio/gi).length)

        }
        else {
          
          this.radioNo += 1

          console.log(this.radioNo)

          for (let i = 0; i < this.showjson.match(/radio/gi).length; i++) {

            this.radios.push({ radio: 'option' })

            this.showRadios = JSON.stringify(this.radios)

            this.radios.splice(this.showjson.match(/radio/gi).length, this.showjson.match(/radio/gi).length + 1)

            console.log(this.radios)

          }
        }
      }

      //checkbox   

      if (this.showjson.match(/checkBox/gi) == null) {

        console.log("no checkBox matches")

      }
      else {

        if (this.showjson.match(/checkBox/gi).length === this.chechboxNo) {

          console.log('no new checkbox', this.chechboxNo, this.showjson.match(/checkBox/gi).length)

        }
        else {

          this.chechboxNo += 1

          console.log(this.chechboxNo)

          for (let i = 0; i < this.showjson.match(/checkBox/gi).length; i++) {

            this.checkboxs.push({ checkBox: 'value' })

            this.checkboxs.splice(this.showjson.match(/checkBox/gi).length, this.showjson.match(/checkBox/gi).length + 1)

            this.showCheckboxs = JSON.stringify(this.checkboxs)

            console.log(this.checkboxs)

          }
        }
      }

      let array = JSON.parse("[" + this.showjson + "]")

      this.Json = array

    })

  }

  updateValues() {

    this.updateValuesBtn = true

  }


  update(value) {

    this.showjson = value

    let array = JSON.parse("[" + this.showjson + "]")

    this.Json = array

    this.showtextBoxs = JSON.stringify(this.textBoxs)

    this.showLabels = JSON.stringify(this.labels)

    this.showRadios = JSON.stringify(this.radios)

    this.showCheckboxs = JSON.stringify(this.showCheckboxs)

  }
}
