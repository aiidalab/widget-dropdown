function l({model:t,el:s}){let n=document.createElement("select");function c(a,i){a.forEach(d=>{if(d.group){let e=document.createElement("optgroup");e.label=d.group,c(d.options,e),i.appendChild(e)}else{let e=document.createElement("option");e.value=d.value,e.textContent=d.text,e.disabled=d.disabled,i.appendChild(e)}})}function o(a){n.innerHTML="",c(a,n),n.selectedIndex=0}o(t.get("options")),t.on("change:options",()=>{o(t.get("options"))}),n.addEventListener("change",function(a){t.set("selected_value",a.target.value),t.save_changes()}),t.on("change:selected_value",()=>{n.value=t.get("selected_value");let a=new Event("change");n.dispatchEvent(a)}),s.classList.add("widget_dropdown"),s.appendChild(n)}var g={render:l};export{g as default};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vanMvd2lkZ2V0LmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgXCIuL3dpZGdldC5jc3NcIjtcblxuZnVuY3Rpb24gcmVuZGVyKHsgbW9kZWwsIGVsIH0pIHtcbiAgbGV0IHNlbGVjdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuXG4gIGZ1bmN0aW9uIGFkZE9wdGlvbnMob3B0aW9ucywgY29udGFpbmVyKSB7XG4gICAgb3B0aW9ucy5mb3JFYWNoKChvcHQpID0+IHtcbiAgICAgIGlmIChvcHQuZ3JvdXApIHtcbiAgICAgICAgY29uc3QgZ3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0Z3JvdXBcIik7XG4gICAgICAgIGdyb3VwLmxhYmVsID0gb3B0Lmdyb3VwO1xuICAgICAgICBhZGRPcHRpb25zKG9wdC5vcHRpb25zLCBncm91cCk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChncm91cCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICBvcHRpb24udmFsdWUgPSBvcHQudmFsdWU7XG4gICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IG9wdC50ZXh0O1xuICAgICAgICBvcHRpb24uZGlzYWJsZWQgPSBvcHQuZGlzYWJsZWQ7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgLy8gQ2xlYXIgZXhpc3Rpbmcgb3B0aW9uc1xuICAgIHNlbGVjdEVsZW1lbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBhZGRPcHRpb25zKG9wdGlvbnMsIHNlbGVjdEVsZW1lbnQpO1xuICAgIC8vIFJlc2V0IHNlbGVjdGVkIGluZGV4IHRvIHRoZSBmaXJzdCBvcHRpb25cbiAgICBzZWxlY3RFbGVtZW50LnNlbGVjdGVkSW5kZXggPSAwO1xuICB9XG5cbiAgc2V0T3B0aW9ucyhtb2RlbC5nZXQoXCJvcHRpb25zXCIpKTtcblxuICBtb2RlbC5vbihcImNoYW5nZTpvcHRpb25zXCIsICgpID0+IHtcbiAgICBzZXRPcHRpb25zKG1vZGVsLmdldChcIm9wdGlvbnNcIikpO1xuICB9KTtcblxuICBzZWxlY3RFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgbW9kZWwuc2V0KFwic2VsZWN0ZWRfdmFsdWVcIiwgZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICBtb2RlbC5zYXZlX2NoYW5nZXMoKTtcbiAgfSk7XG5cbiAgbW9kZWwub24oXCJjaGFuZ2U6c2VsZWN0ZWRfdmFsdWVcIiwgKCkgPT4ge1xuICAgIHNlbGVjdEVsZW1lbnQudmFsdWUgPSBtb2RlbC5nZXQoXCJzZWxlY3RlZF92YWx1ZVwiKTtcbiAgICAvLyBUcmlnZ2VyIGNoYW5nZSBldmVudCBtYW51YWxseVxuICAgIGNvbnN0IGV2ZW50ID0gbmV3IEV2ZW50KFwiY2hhbmdlXCIpO1xuICAgIHNlbGVjdEVsZW1lbnQuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gIH0pO1xuXG4gIGVsLmNsYXNzTGlzdC5hZGQoXCJ3aWRnZXRfZHJvcGRvd25cIik7XG4gIGVsLmFwcGVuZENoaWxkKHNlbGVjdEVsZW1lbnQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7IHJlbmRlciB9O1xuIl0sCiAgIm1hcHBpbmdzIjogIkFBRUEsU0FBU0EsRUFBTyxDQUFFLE1BQUFDLEVBQU8sR0FBQUMsQ0FBRyxFQUFHLENBQzdCLElBQUlDLEVBQWdCLFNBQVMsY0FBYyxRQUFRLEVBRW5ELFNBQVNDLEVBQVdDLEVBQVNDLEVBQVcsQ0FDdENELEVBQVEsUUFBU0UsR0FBUSxDQUN2QixHQUFJQSxFQUFJLE1BQU8sQ0FDYixJQUFNQyxFQUFRLFNBQVMsY0FBYyxVQUFVLEVBQy9DQSxFQUFNLE1BQVFELEVBQUksTUFDbEJILEVBQVdHLEVBQUksUUFBU0MsQ0FBSyxFQUM3QkYsRUFBVSxZQUFZRSxDQUFLLENBQzdCLEtBQU8sQ0FDTCxJQUFNQyxFQUFTLFNBQVMsY0FBYyxRQUFRLEVBQzlDQSxFQUFPLE1BQVFGLEVBQUksTUFDbkJFLEVBQU8sWUFBY0YsRUFBSSxLQUN6QkUsRUFBTyxTQUFXRixFQUFJLFNBQ3RCRCxFQUFVLFlBQVlHLENBQU0sQ0FDOUIsQ0FDRixDQUFDLENBQ0gsQ0FFQSxTQUFTQyxFQUFXTCxFQUFTLENBRTNCRixFQUFjLFVBQVksR0FDMUJDLEVBQVdDLEVBQVNGLENBQWEsRUFFakNBLEVBQWMsY0FBZ0IsQ0FDaEMsQ0FFQU8sRUFBV1QsRUFBTSxJQUFJLFNBQVMsQ0FBQyxFQUUvQkEsRUFBTSxHQUFHLGlCQUFrQixJQUFNLENBQy9CUyxFQUFXVCxFQUFNLElBQUksU0FBUyxDQUFDLENBQ2pDLENBQUMsRUFFREUsRUFBYyxpQkFBaUIsU0FBVSxTQUFVUSxFQUFPLENBQ3hEVixFQUFNLElBQUksaUJBQWtCVSxFQUFNLE9BQU8sS0FBSyxFQUM5Q1YsRUFBTSxhQUFhLENBQ3JCLENBQUMsRUFFREEsRUFBTSxHQUFHLHdCQUF5QixJQUFNLENBQ3RDRSxFQUFjLE1BQVFGLEVBQU0sSUFBSSxnQkFBZ0IsRUFFaEQsSUFBTVUsRUFBUSxJQUFJLE1BQU0sUUFBUSxFQUNoQ1IsRUFBYyxjQUFjUSxDQUFLLENBQ25DLENBQUMsRUFFRFQsRUFBRyxVQUFVLElBQUksaUJBQWlCLEVBQ2xDQSxFQUFHLFlBQVlDLENBQWEsQ0FDOUIsQ0FFQSxJQUFPUyxFQUFRLENBQUUsT0FBQVosQ0FBTyIsCiAgIm5hbWVzIjogWyJyZW5kZXIiLCAibW9kZWwiLCAiZWwiLCAic2VsZWN0RWxlbWVudCIsICJhZGRPcHRpb25zIiwgIm9wdGlvbnMiLCAiY29udGFpbmVyIiwgIm9wdCIsICJncm91cCIsICJvcHRpb24iLCAic2V0T3B0aW9ucyIsICJldmVudCIsICJ3aWRnZXRfZGVmYXVsdCJdCn0K
