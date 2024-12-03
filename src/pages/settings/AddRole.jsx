import React, { useState } from "react";
import dashboard from "../../assets/dashboard.png";
import Package from "../../assets/money.png";
import course from "../../assets/course.png";
import gc from "../../assets/book.png";
import subscribe from "../../assets/subscription.png";
import user from "../../assets/user.png";
import team from "../../assets/team.png";
import help from "../../assets/services.png";
import report from "../../assets/report.png";
import setting from "../../assets/settings.png";

const AddRole = () => {
  const [roleName, setRoleName] = useState("");
  const [features, setFeatures] = useState([
    { name: "Dashboard", icon: dashboard, value: "dashboard" },
    { name: "Packages", icon: Package, value: "packages" },
    { name: "Courses", icon: course, value: "courses" },
    { name: "Generate course", icon: gc, value: "generate course" },
    { name: "Subscriptions", icon: subscribe, value: "subscription" },
    { name: "Users", icon: user, value: "users" },
    { name: "Team", icon: team, value: "team" },
    { name: "Help & Support", icon: help, value: "help_support" },
    { name: "Reports", icon: report, value: "report" },
    { name: "Settings", icon: setting, value: "setting" },
  ]);
  const [accessLevels, setAccessLevels] = useState([]);

  const handleFeatureChange = (index) => {
    const newFeatures = [...features];
    newFeatures[index].checked = !newFeatures[index].checked;
    setFeatures(newFeatures);

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

  const handleAllPermissionChange = (index) => {
    const newAccessLevels = [...accessLevels];
    const featureValue = features[index].value;
    const totalPermissions = ["courses", "users", "revenues"];

    const permissions =
      newAccessLevels.find((level) => level.feature === featureValue)
        ?.permissions || [];
    if (permissions.length === totalPermissions.length) {
      newAccessLevels.forEach((level) => {
        if (level.feature === featureValue) {
          level.permissions = [];
        }
      });
    } else {
      newAccessLevels.forEach((level) => {
        if (level.feature === featureValue) {
          level.permissions = totalPermissions;
        }
      });
    }

    setAccessLevels(newAccessLevels);
  };

  return (
    <div className="bg-[#000928]">
      <div className="mb-2 mx-6">
        <h3 className="my-2 text-base text-white">Role Name:</h3>
        <input
          type="text"
          value={roleName}
          onChange={(e) => setRoleName(e.target.value)}
          className="py-1 mb-2 rounded-md text-center text-black"
        />
        {features.map((feature, index) => (
          <div className="grid  mb-3 text-base" key={index}>
            <div className="flex gap-3">
              <label className="flex items-center gap-2 w-3/6"><img className="size-5" src={feature.icon} alt="icons" />{feature.name}</label>
              <input
                type="checkbox"
                checked={feature.checked || false}
                onChange={() => handleFeatureChange(index)}
              />
              
            </div>
            {feature.checked && (
              <div className="grid mx-6">
                <div className="flex items-center gap-2">
                  <label className="text-sm w-3/6">
                    Total Courses Generated
                  </label>
                  <input
                    type="checkbox"
                    value="courses"
                    checked={
                      accessLevels
                        .find((level) => level.feature === feature.value)
                        ?.permissions.includes("courses") || false
                    }
                    onChange={() => handlePermissionChange(index, "courses")}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <label className="text-sm w-3/6">Total No Of Users</label>
                  <input
                    type="checkbox"
                    value="users"
                    checked={
                      accessLevels
                        .find((level) => level.feature === feature.value)
                        ?.permissions.includes("users") || false
                    }
                    onChange={() => handlePermissionChange(index, "users")}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <label className="text-sm w-3/6">Revenue Generated</label>
                  <input
                    type="checkbox"
                    value="revenues"
                    checked={
                      accessLevels
                        .find((level) => level.feature === feature.value)
                        ?.permissions.includes("revenues") || false
                    }
                    onChange={() => handlePermissionChange(index, "revenues")}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <label className="text-sm w-3/6 ">Course Type</label>
                  <input
                    type="checkbox"
                    value="course type"
                    checked={
                      accessLevels
                        .find((level) => level.feature === feature.value)
                        ?.permissions.includes("course type") || false
                    }
                    onChange={() => handlePermissionChange(index, "course type")}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <label className="text-sm w-3/6 ">Recurring Revenue</label>
                  <input
                    type="checkbox"
                    value="revenue"
                    checked={
                      accessLevels
                        .find((level) => level.feature === feature.value)
                        ?.permissions.includes("revenue") || false
                    }
                    onChange={() => handlePermissionChange(index, "revenue")}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <label className="text-sm w-3/6 ">Ticket Status</label>
                  <input
                    type="checkbox"
                    value="status"
                    checked={
                      accessLevels
                        .find((level) => level.feature === feature.value)
                        ?.permissions.includes("status") || false
                    }
                    onChange={() => handlePermissionChange(index, "status")}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <label className="text-sm w-3/6 ">TMonthly Activity Progress</label>
                  <input
                    type="checkbox"
                    value="activity"
                    checked={
                      accessLevels
                        .find((level) => level.feature === feature.value)
                        ?.permissions.includes("status") || false
                    }
                    onChange={() => handlePermissionChange(index, "status")}
                  />
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    value="all"
                    checked={
                      accessLevels.find(
                        (level) => level.feature === feature.value
                      )?.permissions.length === 3
                    }
                    onChange={() => handleAllPermissionChange(index)}
                  />
                  <label>All</label>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddRole;
