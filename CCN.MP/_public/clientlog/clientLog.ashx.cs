using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.SessionState;
using System.Configuration;
using SGM.Model;
using DigitalMarketing.Common;

namespace DigitalMarketing._public.clientlog
{
    /// <summary>
    /// clientLog 的摘要说明
    /// </summary>
    public class clientLog : IHttpHandler, IRequiresSessionState
    {

        public void ProcessRequest(HttpContext context)
        {
            try
            {
                string type = context.Request["type"];
                string e = context.Request["e"];
                string facid = context.Request["facid"];
                if (type == "PageScanAuthError")
                {
                    string pageScan_Subject = ConfigurationManager.AppSettings["pageScan_Subject"] ?? "";
                    string pageScan_SendTo = ConfigurationManager.AppSettings["pageScan_SendTo"] ?? "ambernet@yesno.com.cn";
                    string sender = ConfigurationManager.AppSettings["sender"] ?? "";
                    string sendCount = ConfigurationManager.AppSettings["sendCount"] ?? "100";
                    string systemState = string.Empty;
                    SendToEntity send = new SendToEntity();
                    send.Sender = sender;
                    send.SendType = "02";
                    send.Subject = pageScan_Subject;
                    send.SendTo = pageScan_SendTo;
                    send.Message = e;
                    send.SubjectType = "6";
                    send.CustomerCode = facid;
                    send.Message = pageScan_Subject;
                    SMSSend.SendMessageWebServiceSoapClient sms = new SMSSend.SendMessageWebServiceSoapClient();
                    if (sms.SendMessages(facid, CEncrypt.Serialize(send), Utility.GetClientIP(), out systemState))
                    {
                        AppLog.Write("PageScanAuthError页面调取摄像头失败，发送邮件成功--[systemState:" + systemState + "]", AppLog.LogMessageType.Info);
                    }
                    else
                    {
                        AppLog.Write("PageScanAuthError页面调取摄像头失败，发送邮件失败--[systemState:" + systemState + "]", AppLog.LogMessageType.Info);
                    }
                }

                AppLog.Write("[client:" + type + "] [message:" + e + "] [facid:" + facid + "]", AppLog.LogMessageType.Info);
            }
            catch (Exception e)
            {
                AppLog.Write("写入日志异常", AppLog.LogMessageType.Error, e);
            }
        }

        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
    }
}