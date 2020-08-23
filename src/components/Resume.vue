<template>
  <div>
    <v-timeline class="p-timeline" v-show="!$vuetify.breakpoint.mobile">
      <v-timeline-item v-for="(item, i) in items" :key="i" color="amber darken-1" small>
        <template v-slot:opposite>
          <span :class="`font-weight-bold grey--text text--darken-3`" v-text="item.year"></span>
        </template>
        <div class="py-4">
          <h3 :class="`font-weight-light grey--text text--darken-3`" v-text="item.title"></h3>
          <h4 :class="`font-weight-bold grey--text text--darken-3`" v-text="item.company"></h4>
          <p style="font-style: italic">{{item.technologies}}</p>
          <ul style="padding-left: 0px">
            <li v-for="(detail, i) in item.details" :key="i">{{detail}}</li>
          </ul>
        </div>
      </v-timeline-item>
    </v-timeline>
    <v-timeline class="p-timeline" v-show="$vuetify.breakpoint.mobile" dense>
        <v-timeline-item v-for="(item, i) in items" :key="i" color="amber darken-1" small>
        <div class="py-4">
          <h4 :class="`font-weight-bold grey--text text--darken-3`" v-text="item.year"></h4>
          <h3 :class="`font-weight-light grey--text text--darken-3`" v-text="item.title"></h3>
          <h4 :class="`font-weight-bold grey--text text--darken-3`" v-text="item.company"></h4>
          <p style="font-style: italic">{{item.technologies}}</p>
          <ul style="padding-left: 0px">
            <li v-for="(detail, i) in item.details" :key="i">{{detail}}</li>
          </ul>
        </div>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script>
export default {
  name: "Resume",
  data() {
    return {
      items: [
        {
          year: "Nov 2015 - Present",
          company: "Transplant Connect (Los Angeles)",
          title: "Full-Stack Software Engineer",
          details: [
            "Work on iTransplant, a web Donation and Transplantation Platform used by Organ Transplantation Agencies in the US, Canada and Australia",
            "Software Engineer front and back end on iTransplant. Working in a team of 15 developers",
            "Design and implement new features on iTransplant such as new pages, new components and API interfaces",
            "Participate to estimation meetings and deployment of new releases using Bitbucket, Bamboo and Octopus",
            "Work on several other projects to improve code quality and develop tools used by the team",
          ],
          technologies:
            "C#, ASP.NET MVC 5 and Webform, SQL Server, REST API, HTML, CSS, jQuery, Node.js, Vue.js, Python",
        },
        {
          year: "Jan 2019 - Jun 2020",
          company: "Schlumberger (Remote)",
          title: "Senior Software Engineer",
          details: [
            "Work on a research project to supervise an autonomous subsea robot used to inspect subsea petroleum assets",
            "Develop front and back end of a web app used to supervise communications with a wireless subsea robot",
            "Develop front and back end of a web app used to visualize and positioned in a 3D map, subsea equipments and the robot",
          ],
          technologies:
            "Node.js, Vue.js, Python, Protobuf, ZMQ Socket, Web Socket, PostgresSQL, Postgis, Docker, Arcgis",
        },
        {
          year: "Nov 2015 - Nov 2016",
          company: "Insensi (New York)",
          title: "Embedded Software Engineer",
          details: [
            "Work on the firmware of a smart home phone based on Android",
            "Design and program in C and C++ the integration of a Bluetooth handset",
            "Work on the improvement of VP8 video decoding using hardware decoding",
          ],
          technologies: "C, C++, WebRTC",
        },
        {
          year: "Jan 2013 - Nov 2015",
          company: "Schlumberger (Paris)",
          title: "Software Engineer",
          details: [
            "Software engineer on a flagship project for Donwhole Testing. This project brings real time communication between surface and downhole tools using acoustic telemetry. It permits to save time and millions of dollars during reservoir characterization",
            "Design and develop in C# and WPF the monitoring and acquisition software used at the surface",
            "Define new functionalities to improve the software and enable teams on the field to deliver the best services to the final client",
            "Provide a reactive and efficient support for teams on the field",
          ],
          technologies: "C#, WPF, SQL",
        },
        {
          year: "Apr 2012 - Sep 2012",
          company: "Thales (Paris)",
          title: "Software Engineer Trainee",
          details: [
            "Design and program in C++ a countermeasure system for a military aircraft simulator",
            "Design and program in C# and WPF, on my proposal, a testing platform using Bing Map to place threats and Microsoft Flight Simulator to manage aircraft position",
          ],
          technologies: "C++, C#, WPF",
        },
      ],
    };
  },
};
</script>