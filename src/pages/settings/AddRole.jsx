import React, { useState } from 'react'
import dashboard from "../../assets/dashboard.png";
import Package from "../../assets/money.png";
import course from "../../assets/course.png";
import gc from "../../assets/book.png";
import subscribe from "../../assets/subscription.png"
import user from "../../assets/user.png"
import team from "../../assets/team.png"
import help from "../../assets/services.png"
import report from "../../assets/report.png"
import setting from "../../assets/settings.png"

const AddRole = () => {
    const [features, setFeatures] = useState([
     {name: "Dashboard", icon: dashboard, value: "dashboard" },
     { name: "Packages", icon: Package, value: "packages"},
     {name: "Courses", icon:course, value: "courses" },
     { name: "Generate course", icon:gc, value: "generate course" },
     { name: "Subscriptions", icon:subscribe, value: "subscription" }, 
     { name: "Users", icon:user, value: "users" },
     { name: "Team", icon:team, value: "team" },
     { name: "Help & Support", icon:help, value: "help_support" },
     { name: "Reports", icon:report, value: "report" },
     { name: "Settings", icon:setting,value: "setting" },
     
      ]);
      const [accessLevels, setAccessLevels] = useState([]);

    
      const handleFeatureChange = (index) => {
        const newFeatures = [...features];
        newFeatures[index].checked = !newFeatures[index].checked;
    
        if (newFeatures[index].checked) {
          setAccessLevels([
            ...accessLevels,
            { feature: newFeatures[index].value, permissions: [] },
          ]);
        } else {
          setAccessLevels(
            accessLevels.filter(
              (level) => level.feature !== newFeatures[index].value
            )
          );
        }
    
        setFeatures(newFeatures);
      };
    
      const handlePermissionChange = (index, permission) => {
        const newAccessLevels = [...accessLevels];
        const featureIndex = newAccessLevels.findIndex(
          (level) => level.feature === features[index].value
        );
    
        if (newAccessLevels[featureIndex].permissions.includes(permission)) {
          newAccessLevels[featureIndex].permissions = newAccessLevels[
            featureIndex
          ].permissions.filter((p) => p !== permission);
        } else {
          newAccessLevels[featureIndex].permissions.push(permission);
        }
        setAccessLevels(newAccessLevels);
      };
  return (
    <div className='bg-[#000928] '>
       <div className="mb-2 mx-6">
            <h3 className=" my-2  text-base text-white ">Role Name:</h3>
            <input type="text"    className="py-1 mb-2 rounded-md text-center text-black " />
            {features.map((feature, index) => {
              
              if (feature.title) {
                return (
                  <div key={index} className=" flex gap-2 items-center">
                    <span>
                    <h3 className="text-base text-primary">{feature.name}</h3> 
                    <p className="text-red-500 text-sm">( Select one option from the list )</p>
                    </span>
                  </div>
                );
              }

              return (
                <div
                  className="grid  mb-3 text-base "
                  key={index}
                >
                  <div className="col-span-1  gap-3">
                    <input
                      type="checkbox"
                      checked={feature.checked}
                      onChange={() => handleFeatureChange(index)}
                    />
                    <label>{feature.name}</label>
                  </div>
                  {feature.checked && (
                    <div className="grid ">
                      <div className="flex items-center gap-2 ">
                        <input
                          type="checkbox"
                          value="view"
                          checked={
                            accessLevels
                              .find(
                                (level) =>
                                  level.feature === features[index].value
                              )
                              ?.permissions.includes("view") || false
                          }
                          onChange={() =>
                            handlePermissionChange(index, "view")
                          }
                        />
                        <label className="text-sm">View</label>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <input
                          type="checkbox"
                          value="create"
                          checked={
                            accessLevels
                              .find(
                                (level) =>
                                  level.feature === features[index].value
                              )
                              ?.permissions.includes("create") || false
                          }
                          onChange={() =>
                            handlePermissionChange(index, "create")
                          }
                        />
                        <label>Create</label>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <input
                          type="checkbox"
                          value="edit"
                          checked={
                            accessLevels
                              .find(
                                (level) =>
                                  level.feature === features[index].value
                              )
                              ?.permissions.includes("edit") || false
                          }
                          onChange={() =>
                            handlePermissionChange(index, "edit")
                          }
                        />
                        <label>Edit</label>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <input
                          type="checkbox"
                          value="delete"
                          checked={
                            accessLevels
                              .find(
                                (level) =>
                                  level.feature === features[index].value
                              )
                              ?.permissions.includes("delete") || false
                          }
                          onChange={() =>
                            handlePermissionChange(index, "delete")
                          }
                        />
                        <label>Delete</label>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <input
                          type="checkbox"
                          value="download"
                          checked={
                            accessLevels
                              .find(
                                (level) =>
                                  level.feature === features[index].value
                              )
                              ?.permissions.includes("download") || false
                          }
                          onChange={() =>
                            handlePermissionChange(index, "download")
                          }
                        />
                        <label>Download</label>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <input
                          type="checkbox"
                          value="all"
                          checked={
                            accessLevels.find(
                              (level) =>
                                level.feature === features[index].value
                            )?.permissions.length === 5 || false
                          }
                          onChange={() => handleAllPermissionChange(index)}
                        />
                        <label>All</label>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
            {/* {errors.featurePermissions && (
              <p className="error text-center text-red-500">
                {errors.featurePermissions}
              </p>
            )} */}
          </div>
    </div>
  )
}

export default AddRole