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
    { name: "Generate course", icon: gc, value: "generate_course" },
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
          <div className="grid mb-3 text-base" key={index}>
            <div className="flex gap-3">
              <label className="flex items-center gap-2 w-3/6">
                <img className="size-5" src={feature.icon} alt="icons" />
                {feature.name}
              </label>
              <input
                type="checkbox"
                checked={feature.checked || false}
                onChange={() => handleFeatureChange(index)}
              />
            </div>
            {feature.checked && (
              <div className="grid mx-6">
                {feature.name === "Dashboard" && (
                  <>
                    {[
                      {
                        label: "Total Courses Generated",
                        value: "coursegenerated",
                      },
                      { label: "Total No Of Users", value: "noOfUsers" },
                      { label: "Revenue Generated", value: "generatedRevenue" },
                      { label: "Course Type", value: "coursetype" },
                      { label: "Recurring Revenue", value: "recurringRevenue" },
                      { label: "Ticket Status", value: "ticketStatus" },
                      {
                        label: "Monthly Activity Progress",
                        value: "monthlyProgress",
                      },
                      { label: "Revenue", value: "revenue" },
                    ].map((permission, index) => (
                      <div className="flex items-center gap-2" key={index}>
                        <label className="text-sm w-4/6">
                          {permission.label}
                        </label>
                        <input
                          type="checkbox"
                          value={permission.value}
                          checked={
                            accessLevels
                              .find((level) => level.feature === feature.value)
                              ?.permissions.includes(permission.value) || false
                          }
                          onChange={() =>
                            handlePermissionChange(index, permission.value)
                          }
                        />
                      </div>
                    ))}
                  </>
                )}

                {feature.name === "Packages" && (
                    <>
                    {[
                      {
                        label: "Can view Packages",
                        value: "viewPackages",
                      },
                      { label: "Can add Packages", value: "addPackages" },
                      { label: "Can edit Packages", value: "editPackages" },
                      { label: "Can delete Packages", value: "deletePackages" },
                    ].map((permission, index) => (
                      <div className="flex items-center gap-2" key={index}>
                        <label className="text-sm w-4/6">
                          {permission.label}
                        </label>
                        <input
                          type="checkbox"
                          value={permission.value}
                          checked={
                            accessLevels
                              .find((level) => level.feature === feature.value)
                              ?.permissions.includes(permission.value) || false
                          }
                          onChange={() =>
                            handlePermissionChange(index, permission.value)
                          }
                        />
                      </div>
                    ))}
                  </>
                )}

                {feature.name === "Courses" && (
                      <>
                      {[
                        {
                          label: "Can view Courses",
                          value: "viewCourses",
                        },
                        { label: "Can Generate Courses", value: "generatecourses" },
                        { label: "Can delete Courses", value: "deleteCourses" },
                      ].map((permission, index) => (
                        <div className="flex items-center gap-2" key={index}>
                          <label className="text-sm w-4/6">
                            {permission.label}
                          </label>
                          <input
                            type="checkbox"
                            value={permission.value}
                            checked={
                              accessLevels
                                .find((level) => level.feature === feature.value)
                                ?.permissions.includes(permission.value) || false
                            }
                            onChange={() =>
                              handlePermissionChange(index, permission.value)
                            }
                          />
                        </div>
                      ))}
                    </>
                  )}

                {feature.name === "Users" && (
                  <>
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
                      <label className="text-sm w-3/6">User Roles</label>
                      <input
                        type="checkbox"
                        value="user_roles"
                        checked={
                          accessLevels
                            .find((level) => level.feature === feature.value)
                            ?.permissions.includes("user_roles") || false
                        }
                        onChange={() =>
                          handlePermissionChange(index, "user_roles")
                        }
                      />
                    </div>
                  </>
                )}

                {/* You can add other features' checkboxes here similarly */}
                {/* Continue with other features (Team, Reports, Settings, etc.) */}

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
