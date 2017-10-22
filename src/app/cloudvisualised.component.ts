import { VisualisationData, CloudvisualisedService } from './services/cloudvisualised.service';
import { Component, OnInit, ViewChild, ElementRef, ViewEncapsulation, OnChanges, AfterViewInit, OnDestroy } from '@angular/core';
import ForceGraph3D from '3d-force-graph';


@Component({
  selector: 'app-cloudvisualised',
  templateUrl: './cloudvisualised.component.html',
  styleUrls: ['./cloudvisualised.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class CloudvisualisedComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy  {
  @ViewChild('projectChart') private chartContainer: ElementRef;
  projectGraph: any;
  nodeDetails: VisualisationData;


  constructor(  private cloudvisualisedService: CloudvisualisedService ) {

                }

  ngOnInit() {

  }

  ngAfterViewInit() {
    console.log('native element');
    console.log(this.chartContainer.nativeElement);

    this.cloudvisualisedService.currentVisualData.subscribe(newData => {
      this.nodeDetails = newData;
      console.log(this.nodeDetails.nodes);
      console.log(this.nodeDetails.links);
      this.projectGraph = ForceGraph3D()(this.chartContainer.nativeElement)
        .graphData(this.nodeDetails)
        .nameField('name')
        .autoColorBy('type')
        .nodeRelSize(5)
        .linkColorField('white');
    });

  }


  ngOnDestroy() {
  }

  ngOnChanges() {

  }



}
