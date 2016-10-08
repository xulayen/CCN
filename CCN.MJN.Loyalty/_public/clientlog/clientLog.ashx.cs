using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.SessionState;
using System.Configuration;
using MJN.Common;

namespace MJN._public.clientlog
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