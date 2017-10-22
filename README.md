# OpenStack & Fujitsu K5 Visualiser

This is a fun visualisation tool that demonstrates how your OpenStack based cloud data can be displayed in 3D.
It leverages the following wonderful projects:

## Angular - https://angular.io/
## D3JS - https://d3js.org/
## three.js - https://threejs.org/
## D3-Force-Graph - https://github.com/vasturiano/3d-force-graph

![openstackviz](https://user-images.githubusercontent.com/9472095/31866402-d215a358-b776-11e7-912c-40dc97408e47.png)

I'll publish a more sensible (read infrastructure icons instead of spheres) 2D business grade version as soon as I get time to debug it :)

## Installation

 - Clone the repository from https://github.com/allthingsclowd/openviz
 - To build run 'npm install'
 - Test by running 'ng serve'

 - Note: This application runs all code in the frontend browser. In order to get around CORS - Cross Origin Resource Sharing - retrictions 
 imposed by browsers it's necessary to proxy the requests to some backend services that don't provide CORS headers.
 See my earlier blog https://allthingscloud.eu/2017/03/24/cross-origin-resource-sharing-cors-on-fujitsus-k5-platform/ for details of how to implement this.

 Alternatively visit - https://openviz.uk-1.cf-app.net/ running on Fujitsu's Cloud Service K5

 - All development has been performed using an openstack domain admin account. This may also work with a user account but I haven't verified all the API endpoints are accessible by a member role.

