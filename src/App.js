import React, { useState } from 'react';
import './App.css';
import Select from 'react-select';

export default function App() {
  const options = [
    { value: "POLICY1", label: "Password Security Policy" },
    { value: "POLICY2", label: "Acceptable Use Policy" },
    { value: "POLICY3", label: "Data Classification Policy" },
    { value: "POLICY4", label: "Physical Security Policy" },
    { value: "POLICY5", label: "Network Security Policy" },
    { value: "POLICY6", label: "Mobile Device Policy" },
    { value: "POLICY7", label: "Data Backup and Recovery Policy" },
    { value: "POLICY8", label: "Remote Access Policy" },
    { value: "POLICY10", label: "Incident Response Policy" },

  ];

  const [selectedPolicy, setSelectedPolicy] = useState(null);

  const handlePolicyChange = (selectedOption) => {
    setSelectedPolicy(selectedOption);
  };

  const policyDescriptions = {
    POLICY1: (
      <div>
        <h2>Security Policy for Passwords</h2>
        <table>
          <tr>
            <td>1</td>
            <td>Password Complexity</td>
            <td>All passwords must meet minimum complexity requirements, including the use of a combination of upper and lowercase letters, numbers, and special characters.</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Password Length</td>
            <td>Passwords must be at least 12 characters long.</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Password Rotation</td>
            <td>Employees are required to change their password every 90 days.</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Password History</td>
            <td>Employees cannot reuse their previous 5 passwords.</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Account Lockout</td>
            <td>After 5 failed login attempts, the account will be locked for a period of 30 minutes.</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Multi-Factor Authentication</td>
            <td>For sensitive systems or data, multi-factor authentication (MFA) is required to access.</td>
          </tr>
          <tr>
            <td>7</td>
            <td>Password Sharing</td>
            <td>Passwords must not be shared with anyone, including coworkers or family members.</td>
          </tr>
          <tr>
            <td>8</td>
            <td>Password Storage</td>
            <td>Passwords must not be stored in plain text or in unencrypted files.</td>
          </tr>
          <tr>
            <td>9</td>
            <td>Third-Party Services</td>
            <td>Employees are prohibited from using their corporate password for third-party services.</td>
          </tr>
          <tr>
            <td>10</td>
            <td>Reporting Security Incidents</td>
            <td>Employees must report any suspected security incidents or potential password breaches to the IT department immediately.</td>
          </tr>
        </table>
      </div>
    ),

    POLICY2: (
      <table >
        <div>
          <h2>Acceptable Use Policy</h2>
          <tr>
          <td>1</td>
            <td>Purpose:</td>
            <td>The purpose of this policy is to define the acceptable use of corporate technology resources, including computers, phones, and other devices.</td>
          </tr>
          <tr>
          <td>2</td>
            <td>Personal Use:</td>
            <td>Limited personal use of corporate technology resources is permitted, but this should not interfere with an employee's job duties, violate any other policies, or cause harm to the corporate's reputation or interests.</td>
          </tr>
          <tr>
          <td>3</td>
            <td>Prohibited Activities:</td>
            <td>
              <ul>
                <li>Downloading or accessing illegal or pirated software, media, or materials.</li>
                <li>Sending, receiving, or accessing any offensive, harassing, or inappropriate content.</li>
                <li>Using corporate technology resources for any illegal activities.</li>
                <li>Introducing viruses, worms, or other malicious software into the corporate's network.</li>
                <li>Sharing confidential corporate information outside the organization without prior approval.</li>
                <li>Unauthorized access or use of other employees' accounts or passwords.</li>
              </ul>
            </td>
          </tr>
          <tr>
          <td>4</td>
            <td>Security:</td>
            <td>Employees are responsible for the security of corporate technology resources, including keeping passwords secure, locking their computers when not in use, and reporting any security incidents or potential breaches.</td>
          </tr>
          <tr>
          <td>5</td>
            <td>Monitoring:</td>
            <td>The corporate reserves the right to monitor employees' use of corporate technology resources, including email, internet usage, and file transfers.</td>
          </tr>
          <tr>
          <td>6</td>
            <td>Consequences of Violation:</td>
            <td>Any violation of this policy may result in disciplinary action, up to and including termination of employment, as well as legal action, if necessary.</td>
          </tr>
          <tr>
          <td>7</td>
            <td>Acknowledgment:</td>
            <td>All employees must sign an acknowledgment of this policy, indicating that they have read and understand the policy and agree to comply with its terms.</td>
          </tr>
        </div>
      </table>

    ),
    POLICY3: (

      <table>
        <div>
          <h2>Data Classification Policy</h2>
          <tbody>
            <tr>
              <td>Purpose:</td>
              <td>The purpose of this policy is to define the levels of sensitivity for corporate data and to establish security controls based on the level of classification.</td>
            </tr>
            <tr>
              <td>Data Classification Levels:</td>
              <td>Corporate data shall be classified into the following levels:</td>
            </tr>
            <tr>
              <td></td>
              <td>
                <ul>
                  <li>Public: Information that is intended for public consumption and has no sensitivity or confidentiality concerns.</li>
                  <li>Internal: Information that is intended for internal use only and is not intended for external consumption.</li>
                  <li>Confidential: Information that is sensitive and requires protection from unauthorized disclosure, modification or destruction.</li>
                  <li>Highly Confidential: Information that is critical to the corporate's business and requires the highest level of protection.</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>Security Controls:</td>
              <td>Security controls shall be implemented based on the level of data classification as follows:</td>
            </tr>
            <tr>
              <td></td>
              <td>
                <ul>
                  <li>Public: No special security controls are required.</li>
                  <li>Internal: Access to internal information shall be restricted to authorized employees, contractors or agents.</li>
                  <li>Confidential: Access to confidential information shall be restricted to authorized personnel on a need-to-know basis, and the information shall be protected by encryption or other appropriate means.</li>
                  <li>Highly Confidential: Access to highly confidential information shall be restricted to a small number of authorized personnel on a strict need-to-know basis, and the information shall be protected by the highest level of security controls.</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>Data Handling:</td>
              <td>All employees must handle corporate data with due care and diligence, and ensure that it is protected from unauthorized access, use or disclosure.</td>
            </tr>
            <tr>
              <td>Data Retention:</td>
              <td>All data shall be retained for a specified period of time, after which it shall be securely destroyed or deleted.</td>
            </tr>
            <tr>
              <td>Data Ownership:</td>
              <td>All corporate data is the property of the corporate and shall be used only for authorized purposes.</td>
            </tr>
            <tr>
              <td>Compliance:</td>
              <td>All employees must comply with applicable laws and regulations regarding data privacy and protection.</td>
            </tr>
            <tr>
              <td>Review and Updates:</td>
              <td>This policy shall be reviewed and updated regularly to ensure its effectiveness and relevance.</td>
            </tr>
          </tbody>
        </div>
      </table>
    ),

    POLICY4: (

      <table>
        <div>
          <h2>Physical Security Policy</h2>
          <tr>
            <td>Purpose:</td>
            <td>The purpose of this policy is to define the physical security controls and measures to protect corporate assets, personnel, and visitors.</td>
          </tr>
          <tr>
            <td>Access Control:</td>
            <td>Access to corporate premises shall be restricted to authorized personnel only, and access control measures shall be implemented, such as key cards, biometric systems, or security personnel.</td>
          </tr>
          <tr>
            <td>Visitor Management:</td>
            <td>All visitors shall sign in and out of the corporate premises, and their access shall be limited to the areas required for their visit.</td>
          </tr>
          <tr>
            <td>Employee Identification:</td>
            <td>All employees shall wear visible identification badges at all times while on corporate premises.</td>
          </tr>
          <tr>
            <td>Security Cameras:</td>
            <td>Security cameras shall be installed in strategic locations to monitor and record activities on corporate premises.</td>
          </tr>
          <tr>
            <td>Alarms:</td>
            <td>Intrusion alarms shall be installed and maintained to detect and alert security personnel of unauthorized access or suspicious activity.</td>
          </tr>
          <tr>
            <td>Physical Protection of Assets:</td>
            <td>Physical protection measures shall be implemented to safeguard corporate assets, such as locking cabinets and storage rooms, and securing IT equipment.</td>
          </tr>
          <tr>
            <td>Emergency Response Plan:</td>
            <td>An emergency response plan shall be developed and maintained, including procedures for evacuations, lockdowns, and shelter-in-place scenarios.</td>
          </tr>
          <tr>
            <td>Key Control:</td>
            <td>Key control measures shall be implemented, such as issuing and tracking keys, and ensuring that lost or stolen keys are reported immediately.</td>
          </tr>
          <tr>
            <td>Regular Inspections:</td>
            <td>Regular inspections shall be conducted to identify and address any physical security vulnerabilities or risks.</td>
          </tr>
          <tr>
            <td>Compliance:</td>
            <td>All employees and contractors shall comply with this policy, as well as any applicable laws and regulations regarding physical security.</td>
          </tr>
          <tr>
            <td>Review and Updates:</td>
            <td>This policy shall be reviewed and updated regularly to ensure its effectiveness and relevance.</td>
          </tr>
        </div>
      </table>

    ),

    POLICY5: (
      <table>
        <div>
          <h2>Network Security Policy</h2>
          <thead>
            <tr>
              <th>Policy</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Purpose</td>
              <td>The purpose of this policy is to establish the network security controls and measures to protect corporate data, systems, and infrastructure.</td>
            </tr>
            <tr>
              <td>Network Access</td>
              <td>Access to corporate networks shall be restricted to authorized personnel only, and access control measures shall be implemented, such as strong authentication, firewall rules, and intrusion prevention systems.</td>
            </tr>
            <tr>
              <td>Remote Access</td>
              <td>Remote access to corporate networks shall be granted only to authorized personnel and shall be protected by VPN connections, two-factor authentication, and other security measures.</td>
            </tr>
            <tr>
              <td>Security Controls</td>
              <td>Network security controls shall be implemented to protect against unauthorized access, malware, and other security threats, including anti-virus software, anti-malware software, and intrusion detection/prevention systems.</td>
            </tr>
            <tr>
              <td>Data Protection</td>
              <td>Network security measures shall be implemented to protect corporate data, including encryption, access controls, and backup and recovery procedures.</td>
            </tr>
            <tr>
              <td>Wireless Network Security</td>
              <td>Wireless networks shall be secured by implementing strong authentication, encryption, and other security controls to protect against unauthorized access and data leakage.</td>
            </tr>
            <tr>
              <td>Network Segmentation</td>
              <td>Corporate networks shall be segmented to restrict access to sensitive data and limit the impact of security breaches.</td>
            </tr>
            <tr>
              <td>Vulnerability Management</td>
              <td>Regular vulnerability assessments and penetration testing shall be conducted to identify and remediate security vulnerabilities in the network.</td>
            </tr>
            <tr>
              <td>Incident Response</td>
              <td>An incident response plan shall be developed and maintained, including procedures for identifying, containing, and responding to security incidents.</td>
            </tr>
            <tr>
              <td>Compliance</td>
              <td>All employees and contractors shall comply with this policy, as well as any applicable laws and regulations regarding network security.</td>
            </tr>
            <tr>
              <td>Review and Updates</td>
              <td>This policy shall be reviewed and updated regularly to ensure its effectiveness and relevance.</td>
            </tr>
          </tbody>
        </div>
      </table>

    ),
    POLICY6: (
      <table>
        <div><h2>Mobile Device Policy</h2>
          <tbody>
            <tr>
              <td>Purpose</td>
              <td>The purpose of this policy is to establish guidelines and controls to protect corporate data and systems on mobile devices.</td>
            </tr>
            <tr>
              <td>Device Management</td>
              <td>Mobile devices that connect to corporate systems or access corporate data shall be managed and secured in accordance with this policy. This includes device registration, inventory, and management of device settings, policies, and access controls.</td>
            </tr>
            <tr>
              <td>Authentication</td>
              <td>Strong authentication mechanisms shall be implemented to ensure that only authorized users can access corporate data and systems on mobile devices. This may include the use of strong passwords, two-factor authentication, biometrics, and other secure authentication methods.</td>
            </tr>
            <tr>
              <td>Encryption</td>
              <td>All data stored on mobile devices shall be encrypted, both in transit and at rest. This includes corporate data and any personal data that may be stored on the device.</td>
            </tr>
            <tr>
              <td>Security Software</td>
              <td>Mobile devices shall be protected by anti-virus and anti-malware software, as well as other security software, as appropriate.</td>
            </tr>
            <tr>
              <td>Application Management</td>
              <td>All applications installed on mobile devices shall be approved by the corporate IT department and shall adhere to the organization's security standards. Employees shall not be permitted to install unauthorized apps or access corporate data through unapproved apps.</td>
            </tr>
            <tr>
              <td>Access Controls</td>
              <td>Access to corporate data and systems on mobile devices shall be controlled by policies, procedures, and technical controls to ensure that data is accessed only by authorized personnel.</td>
            </tr>
            <tr>
              <td>Remote Wiping</td>
              <td>In case of loss or theft of a mobile device, the corporate IT department shall have the ability to remotely wipe all data from the device to prevent unauthorized access to corporate data.</td>
            </tr>
            <tr>
              <td>Usage Guidelines</td>
              <td>Employees shall be required to follow usage guidelines and best practices for mobile devices, including guidelines for safe use, protection of data, and responsible behavior.</td>
            </tr>
            <tr>
              <td>Reporting and Monitoring</td>
              <td>The corporate IT department shall monitor and report on compliance with this policy, including the use of mobile devices, security incidents, and any violations of this policy.</td>
            </tr>
            <tr>
              <td>Compliance</td>
              <td>All employees and contractors shall comply with this policy, as well as any applicable laws and regulations regarding mobile device security.</td>
            </tr>
            <tr>
              <td>Review and Updates</td>
              <td>This policy shall be reviewed and updated regularly to ensure its effectiveness and relevance.</td>
            </tr>
          </tbody>
        </div>
      </table>

    ),
    POLICY7: (
      <table>
        <div>
          <h2>Data Backup and Recovery Policy</h2>
          <tbody>
            <tr>
              <td>Data Backup</td>
              <td>All critical corporate data shall be backed up regularly to secure, off-site storage locations. The backup frequency and retention periods shall be determined based on the importance and sensitivity of the data.</td>
            </tr>
            <tr>
              <td>Backup Procedures</td>
              <td>Backup procedures shall be documented and regularly tested to ensure that backups are successful and recoverable. The backup process shall include verification of backup integrity and proper labeling and storage of backup media.</td>
            </tr>
            <tr>
              <td>Recovery Procedures</td>
              <td>Procedures shall be established to recover data from backup media in case of data loss or corruption. These procedures shall be documented and tested regularly to ensure that data can be recovered in a timely and effective manner.</td>
            </tr>
            <tr>
              <td>Disaster Recovery Planning</td>
              <td>Disaster recovery planning shall be conducted to ensure that critical systems and data can be restored in case of a disaster. This shall include identifying critical systems and data, developing a recovery plan, and testing the plan regularly to ensure its effectiveness.</td>
            </tr>
            <tr>
              <td>Backup Encryption</td>
              <td>All backups shall be encrypted to protect the confidentiality and integrity of corporate data in transit and at rest.</td>
            </tr>
            <tr>
              <td>Backup Monitoring</td>
              <td>Backup operations shall be monitored to ensure that backups are completed successfully and to identify any issues that may affect the availability and integrity of corporate data.</td>
            </tr>
            <tr>
              <td>Backup Retention</td>
              <td>Backup retention periods shall be established based on the importance and sensitivity of the data. All backup media shall be securely destroyed at the end of the retention period.</td>
            </tr>
            <tr>
              <td>Responsibility</td>
              <td>Responsibility for backup and recovery activities shall be assigned to specific personnel, who shall be trained in backup and recovery procedures and held accountable for the proper execution of these activities.</td>
            </tr>
            <tr>
              <td>Compliance</td>
              <td>All employees and contractors shall comply with this policy, as well as any applicable laws and regulations regarding data backup and recovery.</td>
            </tr>
            <tr>
              <td>Review and Updates</td>
              <td>This policy shall be reviewed and updated regularly to ensure its effectiveness and relevance.</td>
            </tr>
          </tbody>
        </div>
      </table>
    ),
    POLICY8: (

      <table>
        <div>
          <h2>Remote Access Policy</h2>
          <tbody>
            <tr>
              <td>Purpose</td>
              <td> The purpose of this policy is to establish guidelines and procedures for remote access to corporate systems, data, and resources, to ensure the security and integrity of corporate assets.</td>
            </tr>
            <tr>
              <td>Access Controls</td>
              <td>Access to corporate systems, data, and resources through remote access shall be granted based on the principle of least privilege, with access restricted to only those users who require it to perform their job duties.</td>
            </tr>
            <tr>
              <td>Authentication</td>
              <td>Strong authentication mechanisms shall be implemented to ensure that only authorized users can access corporate systems, data, and resources through remote access. This may include the use of strong passwords, two-factor authentication, biometrics, and other secure authentication methods.</td>
            </tr>
            <tr>
              <td>Encryption</td>
              <td>All remote access to corporate systems, data, and resources shall be encrypted, both in transit and at rest. This includes data transmitted over public networks or the internet.</td>
            </tr>
            <tr>
              <td>Security Software</td>
              <td> All devices used for remote access shall be protected by anti-virus and anti-malware software, as well as other security software, as appropriate.</td>
            </tr>
            <tr>
              <td>Device Management</td>
              <td>All devices used for remote access shall be managed and secured in accordance with corporate security standards. This includes device registration, inventory, and management of device settings, policies, and access controls.</td>
            </tr>
            <tr>
              <td>Usage Guidelines</td>
              <td>Employees shall be required to follow usage guidelines and best practices for remote access, including guidelines for safe use, protection of data, and responsible behavior.</td>
            </tr>
            <tr>
              <td>Monitoring</td>
              <td> Remote access shall be monitored for compliance with this policy, as well as any security incidents or violations.</td>
            </tr>
            <tr>
              <td>Termination of Access</td>
              <td>Access to corporate systems, data, and resources through remote access shall be terminated immediately upon termination of employment or contract.</td>
            </tr>
            <tr>
              <td>Review and Updates</td>
              <td>This policy shall be reviewed and updated regularly to ensure its effectiveness and relevance.</td>
            </tr>
          </tbody>
        </div>
      </table>
    ),
    POLICY10: (
      <table>
        <div>
          <h2>Incident Response Policy</h2>
          <tbody>
            <tr>
              <td>Purpose</td>
              <td>The purpose of this policy is to establish a framework for identifying, responding to, and mitigating security incidents in a timely and effective manner.</td>
            </tr>
            <tr>
              <td>Incident Response Team</td>
              <td>An incident response team shall be established, consisting of representatives from various departments, such as IT, legal, human resources, and public relations, to manage and coordinate the response to security incidents.</td>
            </tr>
            <tr>
              <td>Incident Management Process</td>
              <td>A formal incident management process shall be established, including procedures for reporting, assessing, containing, and mitigating security incidents.</td>
            </tr>
            <tr>
              <td>Incident Reporting</td>
              <td>All employees and contractors shall be required to report any suspected or confirmed security incidents immediately to the incident response team, using a designated reporting mechanism.</td>
            </tr>
            <tr>
              <td>Incident Assessment</td>
              <td>The incident response team shall assess each reported security incident to determine its severity, scope, and potential impact on corporate assets and data.</td>
            </tr>
            <tr>
              <td>Incident Containment</td>
              <td>Once an incident is confirmed, the incident response team shall take immediate action to contain the incident and prevent further damage.</td>
            </tr>
            <tr>
              <td>Incident Mitigation</td>
              <td>The incident response team shall implement measures to mitigate the effects of the incident, including restoring data and systems, and minimizing the impact on the business.</td>
            </tr>
            <tr>
              <td>Communication</td>
              <td>The incident response team shall communicate regularly and effectively with all stakeholders, including employees, customers, vendors, regulators, and law enforcement agencies, as necessary.</td>
            </tr>
            <tr>
              <td>Lessons Learned</td>
              <td>After each incident, the incident response team shall conduct a post-mortem analysis to identify areas for improvement and update the incident response plan accordingly.</td>
            </tr>
            <tr>
              <td>Compliance</td>
              <td>All employees and contractors shall comply with this policy, as well as any applicable laws and regulations regarding incident response.</td>
            </tr>
            <tr>
              <td>Review and Updates</td>
              <td>This policy shall be reviewed and updated regularly to ensure its effectiveness and relevance.</td>
            </tr>
          </tbody>
        </div>
      </table>
    ),

  };

  return (
    <div style={{ margin: '0 auto', width: 700, textAlign: 'center' }}>
      <h1> Cyber Security Policy Documents</h1>
      <p>As a new employee, it is critical that you comply with our organization's cybersecurity policies to help protect our sensitive data and systems.</p>
      <Select
        options={options}
        value={selectedPolicy}
        onChange={handlePolicyChange}
        placeholder="Select the Policy"
      />

      {selectedPolicy && (
        <div style={{ marginTop: 30 }}>
          {/* <h2>{selectedPolicy.label}</h2>  */}
          <p>{policyDescriptions[selectedPolicy.value]}</p>
        </div>
      )}
    </div>
  );
}
